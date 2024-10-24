import {
  BlockaidReason,
  BlockaidResultType,
} from '../../../../shared/constants/security-provider';
import fetchWithCache from '../../../../shared/lib/fetch-with-cache';
import {
  getSecurityAlertsAPISupportedChainIds,
  isSecurityAlertsAPIEnabled,
  validateWithSecurityAlertsAPI,
} from './security-alerts-api';

jest.mock('../../../../shared/lib/fetch-with-cache', () => ({
  __esModule: true,
  default: jest.fn(),
}));

const CHAIN_ID_MOCK = '0x1';

const REQUEST_MOCK = {
  method: 'eth_sendTransaction',
  params: [
    {
      from: '0x123',
      to: '0x456',
      value: '0x123',
    },
  ],
};

const RESPONSE_MOCK = {
  result_type: BlockaidResultType.Errored,
  reason: BlockaidReason.maliciousDomain,
  description: 'Test Description',
};

const BASE_URL = 'https://example.com';

describe('Security Alerts API', () => {
  const fetchMock = jest.fn();

  beforeEach(() => {
    jest.resetAllMocks();

    global.fetch = fetchMock;

    fetchMock.mockResolvedValue({
      ok: true,
      json: async () => RESPONSE_MOCK,
    });

    process.env.SECURITY_ALERTS_API_URL = BASE_URL;
  });

  describe('validateWithSecurityAlertsAPI', () => {
    it('sends POST request', async () => {
      const response = await validateWithSecurityAlertsAPI(
        CHAIN_ID_MOCK,
        REQUEST_MOCK,
      );

      expect(response).toEqual(RESPONSE_MOCK);

      expect(fetchMock).toHaveBeenCalledTimes(1);
      expect(fetchMock).toHaveBeenCalledWith(
        `${BASE_URL}/validate/${CHAIN_ID_MOCK}`,
        expect.objectContaining({
          method: 'POST',
          body: JSON.stringify(REQUEST_MOCK),
          headers: {
            'Content-Type': 'application/json',
          },
        }),
      );
    });

    it('throws an error if response is not ok', async () => {
      fetchMock.mockResolvedValue({ ok: false, status: 567 });

      const responsePromise = validateWithSecurityAlertsAPI(
        CHAIN_ID_MOCK,
        REQUEST_MOCK,
      );

      await expect(responsePromise).rejects.toThrow(
        'Security alerts API request failed with status: 567',
      );
    });

    it('throws an error if SECURITY_ALERTS_API_URL is not set', async () => {
      delete process.env.SECURITY_ALERTS_API_URL;

      await expect(
        validateWithSecurityAlertsAPI(CHAIN_ID_MOCK, REQUEST_MOCK),
      ).rejects.toThrow('Security alerts API URL is not set');
    });

    it('throws an error if SECURITY_ALERTS_API_ENABLED is false', () => {
      process.env.SECURITY_ALERTS_API_ENABLED = 'false';

      const isEnabled = isSecurityAlertsAPIEnabled();
      expect(isEnabled).toBe(false);
    });
  });

  describe('getSecurityAlertsAPISupportedChainIds', () => {
    it('sends GET request with cache', async () => {
      const SUPPORTED_CHAIN_IDS_MOCK = ['0x1', '0x2'];
      (fetchWithCache as jest.Mock).mockResolvedValue(SUPPORTED_CHAIN_IDS_MOCK);

      const response = await getSecurityAlertsAPISupportedChainIds();

      expect(response).toEqual(SUPPORTED_CHAIN_IDS_MOCK);

      expect(fetchWithCache).toHaveBeenCalledTimes(1);
      expect(fetchWithCache).toHaveBeenCalledWith({
        cacheOptions: { cacheRefreshTime: 300000 },
        fetchOptions: { method: 'GET' },
        functionName: 'getSecurityAlertsAPISupportedChainIds',
        url: `${BASE_URL}/supportedChains`,
      });
    });

    it('throws an error if response is not ok', async () => {
      (fetchWithCache as jest.Mock).mockResolvedValue(null);

      await expect(getSecurityAlertsAPISupportedChainIds()).rejects.toThrow(
        'Security alerts API request failed: No response received',
      );
    });
  });
});

import {
  BRIDGE_API_BASE_URL,
  BRIDGE_CLIENT_ID,
} from '../../../../shared/constants/bridge';
import { MINUTE } from '../../../../shared/constants/time';
import fetchWithCache from '../../../../shared/lib/fetch-with-cache';
import { validateResponse } from '../../../../ui/pages/bridge/bridge.util';
import { StatusRequest, StatusResponse } from './types';

const CLIENT_ID_HEADER = { 'X-Client-Id': BRIDGE_CLIENT_ID };
const CACHE_REFRESH_TEN_MINUTES = 10 * MINUTE;

export const fetchBridgeTxStatus = async (statusRequest: StatusRequest) => {
  // Fetch
  const url = `${BRIDGE_API_BASE_URL}/getTxStatus`;
  const rawTxStatus = await fetchWithCache({
    url,
    fetchOptions: { method: 'GET', headers: CLIENT_ID_HEADER },
    cacheOptions: { cacheRefreshTime: CACHE_REFRESH_TEN_MINUTES },
    functionName: 'fetchBridgeTxStatus',
  });

  // Validate
  validateResponse<StatusResponse, unknown>([], rawTxStatus, url);

  // Convert to Extension format

  // Return
  console.log('fetchBridgeTxStatus', statusRequest);
  return 'connected';
};
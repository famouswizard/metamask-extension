function filterDiffByFilePath(diff: string, regex: string): string {
      let didAPathInBlockMatchRegEx = false;
          if (new RegExp(regex, 'u').test(path)) {
            didAPathInBlockMatchRegEx = true;
      return didAPathInBlockMatchRegEx;
    const isAdditionLine = line.startsWith('+') && !line.startsWith('+++');
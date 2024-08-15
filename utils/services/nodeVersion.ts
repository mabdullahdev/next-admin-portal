function checkNodeVersion() {
  const requiredVersion = '20.15.1';
  const currentVersion = process.version;

  if (!currentVersion.startsWith(`v${requiredVersion}`)) {
    console.error(`Incorrect Node.js version. Required: ${requiredVersion}, Found: ${currentVersion}.`);
  }
}

checkNodeVersion();
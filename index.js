/**
 * Returns the size in bytes expressed by `sizeStr`.
 * If the optional parameter `raised` is passed as true, the function will
 * throw exceptions instead of returning null.
 * 
 * @param {String} sizeStr 
 * @param {bool} raise
 * @return {number} size
 */
const sizeInBytes = (sizeStr, raise = false) => {

  if (!sizeStr || typeof sizeStr !== 'string' || sizeStr.trim() === '') {
    if (raise) {
      throw new Error('Invalid string ' + sizeStr);
    }
    return null;
  }

  const units = {
    b: 1,           // bytes
    k: 1024,        // kilobytes
    m: 1024 << 10,  // megabytes
    g: 1024 << 20,  // gigabytes
    t: 1024 << 30,  // terabytes
    p: 1024 << 40,  // petabytes
  }

  const match = sizeStr.match(/^\s*([0-9\.]+)\s*([bkmgtp])?/);

  if (!match) {
    if (raise) {
      throw new Error('Match not found');
    }
    return null;
  }

  const unit = Number(units[match[2].toLowerCase().trim()]);
  const size = Number(match[1]) * unit;

  return size;
}

module.exports = sizeInBytes;

class Cache {
  setCache(key, value) {
    return localStorage.setItem(key, JSON.stringify(value))
  }
  getCache(key) {
    const value = localStorage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
  }
  removeCache(key) {
    return localStorage.removeItem(key)
  }
  clearCache() {
    return localStorage.clear()
  }
}

export default new Cache()

module.exports = {
  responseHandlers(callback) {
    return {
      failed(e) {
        callback(e, {
          statusCode: 500,
          body: `Failed with error: + ${e.message}`,
        })
      },
      success(payload) {
        callback(null, {
          statusCode: 200,
          body: payload,
        })
      },
    }
  },
}

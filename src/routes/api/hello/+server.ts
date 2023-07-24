export async function get() {
    return {
      status: 200,
      body: {
        message: "Hello, API!",
      },
      headers: {
        "Content-Type": "application/json",
      },
    };
  }
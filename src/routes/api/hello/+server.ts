export async function get(name: string) {
    return {
      status: 200,
      body: {
        message: `hello ${name}`,
      },
      headers: {
        "Content-Type": "application/json",
      },
    };
  }
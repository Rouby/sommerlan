interface Resource<T> {
  read(): T;
  promise(): Promise<T>;
  update(updater: (v: T) => T): Resource<T>;
}

export function toResource<T>(promise: Promise<T>): Resource<T> {
  let status = 'pending';
  let result: T;
  let error: Error;

  const suspender = promise.then(
    (r) => {
      result = r;
      status = 'success';
      return r;
    },
    (e) => {
      error = e;
      status = 'error';
    },
  );

  return {
    read() {
      if (status === 'pending') {
        throw suspender;
      } else if (status === 'error') {
        throw error;
      } else {
        return result;
      }
    },
    async promise() {
      await suspender;
      if (error) {
        throw error;
      }
      return result;
    },
    update(updater: (v: T) => T) {
      result = updater(result);
      return { ...this };
    },
  };
}

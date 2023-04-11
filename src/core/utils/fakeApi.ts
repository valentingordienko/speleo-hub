function getRandomTimeout(): number {
  return Math.floor(Math.random() * 10000)
}

export async function resolve<D>(data: D, timeout?: number): Promise<D> {
  return new Promise((resolve)=> {
    setTimeout(()=> {
      resolve(data)
    }, timeout || getRandomTimeout())
  })
}

export async function reject<D>(data: D, timeout?: number): Promise<D> {
  return new Promise((resolve, reject)=> {
    setTimeout(()=> {
      reject(data)
    }, timeout || getRandomTimeout())
  })
}
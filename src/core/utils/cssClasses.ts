type TArg = string | string[] | Record<string, boolean>

export function cssClasses(...arg: TArg[]): string {
    const values: Set<string> = new Set([])
    arg.forEach((item)=> {
        if(typeof item === 'string') {
            values.add(item)
        } else if(Array.isArray(item)) {
            item.forEach((i)=> {
                values.add(i)
            })
        } else if(typeof item === 'object') {
            const data = Object.entries(item)
            data.forEach(([key, value])=> {
                if(value) {
                    values.add(key)
                }
            })
        }
    })
    let result: string = ''
    values.forEach((item)=> result += ` ${item}`)
    return result.trim()
}
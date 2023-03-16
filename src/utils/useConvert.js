export const useConvert = (n) => {
    const number = n.toString()
    const len = number.length
    const place = len % 3 || 3
    let abb
    switch(true) {
      case len > 9:
        abb = 'B'
        break
      case len > 6:
        abb = 'M'
        break
      case len > 3:
        abb = 'K'
        return `${number.slice(0, place)}${abb}`
      default:
        return number
    }
    
    return `${number.slice(0, place)}.${number.slice(place, place + 1)}${abb}`
  }
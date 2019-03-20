import useWindowWidth from "./useWindowWidth";

export default function useColumnLimit() {
  let limit = 3
  let width = useWindowWidth()
  
  if (width >= 0 && width <= 567) {
    limit = 1
  } else if (width > 567 && width <= 992) {
    limit = 2
  }

  return limit
}
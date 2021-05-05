export enum Colors {
  primary = 'primary',
  secondary = 'secondary',
  info = 'info',
  success = 'success',
  warning = 'warning',
  danger = 'danger',
  light = 'light',
  dark = 'dark',
  white = 'white'
}

export function getTextColor(bgColor: Colors):Colors {
  const isLight = bgColor === Colors.white || bgColor === Colors.warning || bgColor === Colors.light;
  return isLight ?  Colors.dark : Colors.white;
}
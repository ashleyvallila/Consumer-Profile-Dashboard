export function authorized(url){try{const u=new URL(url);return u.origin==='https://ashleyvallila.github.io'&&u.pathname.startsWith('/Consumer-Profile-Dashboard/')}catch{return false}}
export function validDays(n){return Number.isInteger(n)&&[7,30,90,365].includes(n)}

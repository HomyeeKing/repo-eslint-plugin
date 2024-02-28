export const testFn = ()=>{
  console.log('import.meta.a ', import.meta.a )
  console.log('global.ddd', global.ddd)
  return import.meta.a === 1
}
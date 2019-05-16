// const _importPath = file => import '@/components/' + file + '.vue'
export default file => ()=> import '@/components/' + file + '.vue'
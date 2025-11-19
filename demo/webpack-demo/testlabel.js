export default () => {
   
    class Demo {
        static count = 0
        #secret = 'babel-private-field'
        name = 'test'
      }
    console.log('new Demo().name', new Demo().name)
    console.log('hello from module babel.js')
}

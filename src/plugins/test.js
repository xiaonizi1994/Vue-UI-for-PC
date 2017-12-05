/**
 * Created by guilin on 2017/12/5.
 */
import layer from '../components/layer'
export default {
    install: function (Vue, options) {
        //注册全局组件，其它页面直接引用不用import
        Vue.component(layer.name, layer);
        //添加全局API
        Vue.prototype.$alert = function (options) {
            var message = Vue.extend(layer);
            const propsData = Object.assign({}, options);
            var component = new message({
                propsData
            }).$mount();
            component.open();
            /*var component = new message({
             data:options
             }).$mount()*/
            document.body.appendChild(component.$el)
        }
    }
}
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(layer)
}
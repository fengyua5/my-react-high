
### 1.cycle(高阶组件的周期)




### 2.category(高阶组件的分类)

##### Props Proxy
* 操作 props
* 通过 Refs 访问到组件实例
* 提取 state
* 用其他元素包裹 WrappedComponent

##### Inheritance Inversion
Inheritance Inversion 允许 HOC 通过 this 访问到 WrappedComponent，意味着它可以访问到 state、props、组件生命周期方法和 render 方法。

* 渲染劫持（Render Highjacking）
* 提取 state

### 3.与木偶组件的结合

this is a blog about Higher Order Component,[click here](https://zhuanlan.zhihu.com/p/24776678?group_id=802649040843051008)


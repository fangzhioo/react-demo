# react demo

 这是一个简单的学习Reactjs的项目。

* 学习教程来自以下：

  - [React 中文文档 by Facebook](https://doc.react-china.org/)
  - [Reactjs 小书 by 胡子大哈](http://huziketang.com/books/react/)
  - [React 入门实例教程 by 阮一峰](http://www.ruanyifeng.com/blog/2015/03/react.html)
  - ...

## 总结

* 组件中的函数 按照一定的顺序来编写，有利于代码的阅读和维护。

组件的内容编写顺序如下：
  1. `static` 开头的类属性，如 defaultProps、propTypes。
  2. 构造函数，`constructor`。
  3. `getter`/`setter`（还不了解的同学可以暂时忽略）。
  4. `组件生命周期`。
  5. _ 开头的`私有方法`。
  6. `事件监听方法`，handle*。
  7. `render*开头的方法`，有时候 render() 方法里面的内容会分开到不同函数里面进行，这些函数都以 render* 开头。
  8. `render()` 方法。

* 组件可以分为两种，即 `Dumb（愚蠢）组件` 和 `Smart（机智）组件`，正确使用可以利用代码复用和可读。

只会接受 `props` 并且渲染确定结果的组件叫做 `Dumb组件` , Dumb组件最好不要依赖除了React和Dumb组件之外的内容，可复用性是最好的。
专门做数据相关的应用逻辑，和各种数据打交道、和Ajax打交道，然后把数据通过`props`传递给Dumb组件，然后Dumb组件完成渲染的这类组件，叫做 `Smart组件`。

我们可以分离这两种组件，如，在`src`下新建两个文件夹 `components/` 和 `containers/` ，然后我们约定，所有Dumb组件放在 `components/` 目录下，所有Smart组件都放在 `containers/` 目录下。

根据是否需要高度的复用性，把组件划分为 `Dumb 组件`和 `Smart 组件`，约定俗成地把它们分别放到 `components` 和 `containers` 目录下。

`Dumb 组件`基本只做一件事情 —— 根据 `props` 进行渲染。而 Smart 则是负责应用的逻辑、数据，把所有相关的 Dumb（Smart）组件组合起来，通过 `props` 控制它们。

`Smart 组件`可以使用 Smart、Dumb 组件；而 Dumb 组件最好只使用 Dumb 组件，否则它的复用性就会丧失。

要根据应用场景不同划分组件，如果一个组件并不需要太强的复用性，直接让它成为 Smart 即可；否则就让它成为 Dumb 组件。

还有一点要注意，Smart 组件并不意味着完全不能复用，Smart 组件的复用性是依赖场景的，在特定的应用场景下是当然是可以复用 Smart 的。而 Dumb 则是可以跨应用场景复用，Smart 和 Dumb 都可以复用，只是程度、场景不一样。 

## git常用命令

![](https://www.git-tower.com/blog/content/posts/54-git-cheat-sheet/git-cheat-sheet-large01.png)
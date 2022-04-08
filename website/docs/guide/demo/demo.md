---
title: 概述
slug: /guide/demo
order: 1
---

本节我们会详细讲述不同框架下的子应用如何接入 Garfish, 提供抄得走的接入案例，以下所有demo 均可在 garfish-demo 中找到实际使用案例，目前提供的 demo 案例包含：
- react (version 16, 17)
- vue (version 2, 3)
- vite (version 2)
- angular (version 13)
- umi（todo 提供接入案例）

:::note
以上框架可以任意组合，换句话说任何一个框架都可以作为主应用嵌入其它类型的子应用，任何一个框架也可以作为子应用被其它框架嵌入，包括上面没有列举出的其它库，如 svelte、nextjs、nuxtjs ...

我们只列举了部分框架，如果有其它框架需求，请在 github上 提 issue 告知我们。
:::

## demo 案例
子应用的导出提供通过 `@garfish/bridge`的方式和自定义导出函数两种方式，我们将下demo 案例中分别讲述。

- [react16/17 子应用](/guide/demo/react) （react16、react17应用）
- [vue 子应用](/guide/api/vue)（vue 应用接入demo）
- [vue3 子应用](/guide/api/vue3)（vue3 应用接入demo）
- [vite 子应用](/guide/api/vite)（vite 应用接入demo）
- [angular 子应用](/guide/api/angular)（angular 应用接入demo）
- [umi 子引用](/guide/api/umi)（umi 应用接入demo）

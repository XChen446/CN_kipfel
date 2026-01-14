export function base64LinkPlugin(md) {
  const defaultRender = md.renderer.rules.link_open || function(tokens, idx, options, env, self) {
    return self.renderToken(tokens, idx, options)
  }

  md.renderer.rules.link_open = function(tokens, idx, options, env, self) {
    const token = tokens[idx]
    const hrefIndex = token.attrIndex('href')

    if (hrefIndex >= 0) {
      const href = token.attrs[hrefIndex][1]
      // 检测是否是base64编码的链接
      if (href.startsWith('base64:')) {
        const encoded = href.substring(7)
        try {
          const decoded = atob(encoded)
          token.attrSet('href', decoded)
          //添加点击事件处理
          token.attrPush(['onclick', `event.preventDefault();window.open('${decoded}', '_blank')`])
        } catch (e) {
          console.error('Base64 decode error:', e)
          token.attrSet('href', '/')
        }
      }
    }

    return defaultRender(tokens, idx, options, env, self)
  }
}
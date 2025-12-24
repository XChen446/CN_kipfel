import DefaultTheme from 'vitepress/theme';
import giscusTalk from 'vitepress-plugin-comment-with-giscus';
import { useData, useRoute } from 'vitepress';
import { toRefs } from "vue";

export default {
...DefaultTheme,
enhanceApp(ctx) {
DefaultTheme.enhanceApp(ctx);
},
setup() {
const { frontmatter } = toRefs(useData());
const route = useRoute();

        giscusTalk({
            repo: 'XChen446/CN_kipfel',
            repoId: 'R_kgDOQsvFrg',
            category: 'General',
            categoryId: 'DIC_kwDOQsvFrs4C0FMK',
            mapping: 'pathname',
            strict: '1',
            reactions: '1',
            emit: '1',
            input: 'top',
            lang: 'zh-CN',
            loading: 'lazy',
            theme: 'preferred_color_scheme'
        }, {
            frontmatter,
            route
        }, true);
    }
};
import { l as createVNode, ay as Fragment, az as __astro_tag_component__ } from './astro/server_DlXVp__-.mjs';
import 'clsx';

const frontmatter = {
  "title": "Slipped by unnoticed",
  "description": "Is it better to burn out than to fade away?",
  "pubDate": "2025-04-15T00:00:00.000Z",
  "tags": ["erratic-thought"]
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = {
    blockquote: "blockquote",
    em: "em",
    img: "img",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/blog-images/slipped-by.webp",
        alt: "A view from a flyover across my office in West Jakarta"
      })
    }), "\n", createVNode(_components.p, {
      children: "I started April by reading a somewhat horrifying tweet:"
    }), "\n", createVNode("blockquote", {
      class: "twitter-tweet",
      children: createVNode("a", {
        href: "https://x.com/1frvnk/status/1908589002778960144"
      })
    }), "\n", createVNode("script", {
      async: true,
      src: "https://platform.twitter.com/widgets.js",
      charset: "utf-8"
    }), "\n", createVNode(_components.p, {
      children: "There’s a question I think is looming over the heads of people around me (and what I think started as a light salaryman’s joke), it roughly goes like this:"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "We work this hard every single day, what are we looking for exactly?"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "It sounds cliche and normal at first, but then it got me reflecting on my routine:"
    }), "\n", createVNode(_components.p, {
      children: "You wake up Monday morning, you take a shower, eat breakfast, go to work, eat lunch, have a meeting, go home. And boom, it’s Friday 5:54 PM and you’re heading out for the weekend."
    }), "\n", createVNode(_components.p, {
      children: "You celebrate new years, write down some things you want to achieve, but then you go about your days. And boom, it’s December 28th."
    }), "\n", createVNode(_components.p, {
      children: "It’s not that I want to have a Bezos-level money or anything. It feels just scary how time can slip away ‘that’ easily."
    }), "\n", createVNode(_components.p, {
      children: ["So, the phrase ", createVNode(_components.em, {
        children: "“shaping the life you desire”"
      }), " hits hard. You can have a thriving career and a mundane life. Or you can travel wherever you want in the world but still feel that void."]
    }), "\n", createVNode(_components.p, {
      children: "Guess being mindful is the only antidote to an empty heart or unawareness of how time goes by too fast."
    }), "\n", createVNode(_components.p, {
      children: "But to me, the question remains, or even evolved to something more bewildering:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "What kind of life do I desire?"
      }), "\n", createVNode(_components.li, {
        children: "How to “shape a life” to reach a “desirable” point?"
      }), "\n", createVNode(_components.li, {
        children: "Can you even reach that point? Or is it a continuous journey?"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Even in publishing this post, I kept trying to add more points until I reached a just-frickin-push-the-button kinda feeling."
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

const url = "src/content/blog/slipped.mdx";
const file = "D:/Documents/IrfanKurniaDotCom/personal-site-2026/src/content/blog/slipped.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "D:/Documents/IrfanKurniaDotCom/personal-site-2026/src/content/blog/slipped.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };

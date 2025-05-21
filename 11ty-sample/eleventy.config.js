import { govukEleventyPlugin } from '@x-govuk/govuk-eleventy-plugin'

const serviceName = 'Samland Government'
const serviceUrl = 'https://samland.minersonline.uk'

export default function(eleventyConfig) {
  // Plugins
  eleventyConfig.addPlugin(govukEleventyPlugin, {
    icons: {
      mask: 'https://raw.githubusercontent.com/Samland-Gov/.github/274ae83c834dfbd76b869d7eb4ccceebb6d958d5/flag.svg',
      shortcut:
        'https://raw.githubusercontent.com/Samland-Gov/.github/274ae83c834dfbd76b869d7eb4ccceebb6d958d5/flag.svg',
      touch:
        'https://raw.githubusercontent.com/Samland-Gov/.github/274ae83c834dfbd76b869d7eb4ccceebb6d958d5/flag.svg'
    },
    opengraphImageUrl:
      'https://raw.githubusercontent.com/Samland-Gov/.github/274ae83c834dfbd76b869d7eb4ccceebb6d958d5/flag.svg',
    themeColor: '#2288aa',
    titleSuffix: serviceName,
    homeKey: serviceName,
    showBreadcrumbs: false,
    headingPermalinks: true,
    url:
      process.env.GITHUB_ACTIONS &&
      serviceUrl,
    stylesheets: ['/assets/application.css'],
    header: {
      homepageUrl: serviceUrl,
      logotype: {
        text: serviceName
      },
      search: {
        indexPath: '/search.json',
        sitemapPath: '/sitemap'
      }
    },
    footer: {
      logo: false,
      contentLicence: {
        html: 'Licensed under the <a class="govuk-footer__link" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0 license</a>, except where otherwise stated'
      },
      copyright: { text: `© ${serviceName} - Samuel Hulme` },
      navigation: [
        {
          title: "Two column list",
          width: "two-thirds",
          columns: 2,
          items: [
            {
              href: "#",
              text: "Navigation item 1"
            },
            {
              href: "#",
              text: "Navigation item 2"
            },
            {
              href: "#",
              text: "Navigation item 3"
            },
            {
              href: "#",
              text: "Navigation item 4"
            },
            {
              href: "#",
              text: "Navigation item 5"
            },
            {
              href: "#",
              text: "Navigation item 6"
            }
          ]
        },
        {
          title: "Single column list",
          width: "one-third",
          items: [
            {
              href: "#",
              text: "Navigation item 1"
            },
            {
              href: "#",
              text: "Navigation item 2"
            },
            {
              href: "#",
              text: "Navigation item 3"
            }
          ]
        }
      ]
    },
    rebrand: true
  })

  // Passthrough
  eleventyConfig.addPassthroughCopy('./docs/assets')

  // Watch
  eleventyConfig.addWatchTarget('./docs/')

  // Enable X-GOVUK brand
  eleventyConfig.addNunjucksGlobal('xGovuk', false)

  // Config
  return {
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: { input: 'docs' },
  }
};
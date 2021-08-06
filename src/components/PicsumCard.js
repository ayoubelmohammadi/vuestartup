import Vue from "vue";

export const PicsumCard = {
  props: ["url"],
  render(h) {
    const lazyImage = h("v-lazy-image", {
      props: {
        src: this.url
      },
      on: {
        load: function() {
          this.busy = !this.busy;
        }
      }
    });

    const vIcon = h("v-icon", {
      class: {
        "mt-3": true
      },
      domProps: {
        innerHTML: "cloud"
      }
    });

    const p = h("p", {
      class: {
        loading: true,
        subheading: true
      },
      domProps: {
        innerHTML: "Loading"
      }
    });

    const span = h(
      "span",
      {
        class: {
          "py-3": true
        },
        style: {
          display: this.busy ? "none" : "inline-flex"
        }
      },
      [vIcon, p]
    );

    const vFlex = h(
      "v-flex",
      {
        attrs: {
          xs12: true
        },
        class: {
          "text-xs-center": true
        }
      },
      [lazyImage, span]
    );

    const vCardTitle = h(
      "v-card-title",
      {
        attrs: {
          "primary-title": true
        }
      },
      [
        h("div", [
          h("h3", {
            class: {
              headline: true,
              "mb-0": true
            }
          })
        ])
      ]
    );

    const vCardActions = h(
      "v-card-actions",
      {
        class: {
          "pa-3": true
        }
      },
      [
        "Rate this page",
        h("v-spacer"),
        h("v-rating", {
          attrs: {
            ripple: true,
            "half-increments": true,
            hover: true
          }
        })
      ]
    );

    return h(
      "v-card",
      {
        attrs: {
          tile: true
        },
        ref: "card"
      },
      [vFlex, vCardTitle, vCardActions]
    );
  }
};

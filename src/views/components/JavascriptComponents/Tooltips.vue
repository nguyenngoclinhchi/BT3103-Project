<template>
    <div class = "row">
        <div class = "col-lg-6">
            <small class = "d-block text-uppercase font-weight-bold mb-3">Tooltips</small>
            <base-button class = "btn-tooltip" size = "sm" title = "Tooltip on left"
                         type = "primary" v-b-tooltip.hover.left>On left
            </base-button>
            <base-button class = "btn-tooltip" size = "sm" title = "Tooltip on top"
                         type = "primary" v-b-tooltip.hover.top>On top
            </base-button>
            <base-button class = "btn-tooltip" size = "sm" title = "Tooltip on bottom"
                         type = "primary" v-b-tooltip.hover.bottom>On bottom
            </base-button>
            <base-button class = "btn-tooltip" size = "sm" title = "Tooltip on right"
                         type = "primary" v-b-tooltip.hover.right>On right
            </base-button>
        </div>
        <div class = "col-lg-6 mt-4 mt-lg-0">
            <small class = "d-block text-uppercase font-weight-bold mb-3">Popovers</small>
            <base-button size = "sm" title = "Popover On Left"
                         type = "default"
                         v-b-popover.hover.left = "'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'">On left
            </base-button>
            
            <base-button size = "sm" title = "Popover On Left"
                         type = "default"
                         v-b-popover.hover.left = "'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'">On left
            </base-button>
            
            <base-button size = "sm" title = "Popover On Top"
                         type = "default"
                         v-b-popover.hover.top = "'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'">On top
            </base-button>
            <base-button size = "sm" title = "Popover On right"
                         type = "default"
                         v-b-popover.hover.right = "'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'">On right
            </base-button>
            <base-button size = "sm" title = "Popover On bottom"
                         type = "default"
                         v-b-popover.hover.bottom = "'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'">On bottom
            </base-button>
        </div>
    </div>
</template>
<script>
    import {VBTooltip} from "bootstrap-vue/esm/directives/tooltip/tooltip";
    import {VBPopover} from "bootstrap-vue/esm/directives/popover/popover";

    export default {
        directives: {
            BTooltip: VBTooltip,
            BPopover: VBPopover,
        }
    };
</script>

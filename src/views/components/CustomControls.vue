<template>
    <section class = "section">
        <div class = "container">
            <!-- Custom controls -->
            <div class = "row">
                <div class = "col-lg-3 col-md-6">
                    <!-- Checkboxes -->
                    <div class = "mb-3">
                        <small class = "text-uppercase font-weight-bold">Checkboxes</small>
                    </div>
                    <base-checkbox class = "mb-3" v-model = "checkboxes.unchecked">
                        Unchecked
                    </base-checkbox>
                    <base-checkbox class = "mb-3" v-model = "checkboxes.checked">
                        Checked
                    </base-checkbox>
                    
                    <base-checkbox class = "mb-3" disabled v-model = "checkboxes.uncheckedDisabled">
                        Unchecked
                    </base-checkbox>
                    <base-checkbox class = "mb-3" disabled v-model = "checkboxes.checkedDisabled">
                        Checked
                    </base-checkbox>
                </div>
                <div class = "col-lg-3 col-sm-6 mt-4 mt-md-0">
                    <!-- Radio buttons -->
                    <div class = "mb-3">
                        <small class = "text-uppercase font-weight-bold">Radios</small>
                    </div>
                    <base-radio class = "mb-3" name = "radio0" v-model = "radio.radio1">
                        Unchecked
                    </base-radio>
                    
                    <base-radio class = "mb-3" name = "radio1" v-model = "radio.radio1">
                        Checked
                    </base-radio>
                    
                    
                    <base-radio class = "mb-3" disabled name = "radio2" v-model = "radio.radio2">
                        Disabled unchecked
                    </base-radio>
                    
                    <base-radio class = "mb-3" disabled name = "radio3" v-model = "radio.radio2">
                        Disabled checked
                    </base-radio>
                </div>
                <div class = "col-lg-3 col-sm-6 mt-4 mt-md-0">
                    <!-- Toggle buttons -->
                    <div class = "mb-3">
                        <small class = "text-uppercase font-weight-bold">Toggle buttons</small>
                    </div>
                    <base-switch v-model = "switches.off"></base-switch>
                    <span class = "clearfix"></span>
                    <base-switch v-model = "switches.on"></base-switch>
                </div>
                <div class = "col-lg-3 col-sm-6 mt-4 mt-md-0">
                    <div class = "mb-3">
                        <small class = "text-uppercase font-weight-bold">Sliders</small>
                    </div>
                    <!-- Simple slider -->
                    <base-slider v-model = "sliders.slider1">
                    
                    </base-slider>
                    <!-- Range slider -->
                    <div class = "mt-5">
                        <!-- Range slider container -->
                        <base-slider :range = "{min: 0, max: 500}" v-model = "sliders.slider2">
                        
                        </base-slider>
                    </div>
                </div>
            </div>
            <div class = "row justify-content-center mt-md">
                <div class = "col-lg-12">
                    <!-- Menu -->
                    <h3 class = "h4 text-success font-weight-bold mb-4">Menu</h3>
                    <div class = "row">
                        <div class = "col-lg-6">
                            <div class = "mb-3">
                                <small class = "text-uppercase font-weight-bold">With text</small>
                            </div>
                            <base-nav effect = "dark" expand round title = "Menu" type = "primary">
                                <div class = "row" slot = "content-header" slot-scope = "{closeMenu}">
                                    <div class = "col-6 collapse-brand">
                                        <a href = "./index.html">
                                            <img src = "img/brand/blue.png">
                                        </a>
                                    </div>
                                    <div class = "col-6 collapse-close">
                                        <close-button @click = "closeMenu" target = "nav-inner-primary">
                                        
                                        </close-button>
                                    </div>
                                </div>
                                
                                <ul class = "navbar-nav ml-lg-auto">
                                    <li class = "nav-item">
                                        <a class = "nav-link" href = "#">Discover
                                            <span class = "sr-only">(current)</span>
                                        </a>
                                    </li>
                                    <li class = "nav-item">
                                        <a class = "nav-link" href = "#">Profile</a>
                                    </li>
                                    <li class = "nav-item dropdown">
                                        <a aria-expanded = "false" aria-haspopup = "true" class = "nav-link"
                                           data-toggle = "dropdown" href = "#" id = "nav-inner-primary_dropdown_1"
                                           role = "button">Settings</a>
                                        <div aria-labelledby = "nav-inner-primary_dropdown_1"
                                             class = "dropdown-menu dropdown-menu-right">
                                            <a class = "dropdown-item" href = "#">Action</a>
                                            <a class = "dropdown-item" href = "#">Another action</a>
                                            <div class = "dropdown-divider"></div>
                                            <a class = "dropdown-item" href = "#">Something else here</a>
                                        </div>
                                    </li>
                                </ul>
                            </base-nav>
                        </div>
                        <div class = "col-lg-6 mt-4 mt-lg-0">
                            <div class = "mb-3">
                                <small class = "text-uppercase font-weight-bold">With icons</small>
                            </div>
                            <base-nav effect = "dark" expand round title = "Menu" type = "success">
                                <div class = "row" slot = "content-header" slot-scope = "{closeMenu}">
                                    <div class = "col-6 collapse-brand">
                                        <a href = "./index.html">
                                            <img src = "img/brand/blue.png">
                                        </a>
                                    </div>
                                    <div class = "col-6 collapse-close">
                                        <close-button @click = "closeMenu" target = "nav-inner-primary">
                                        
                                        </close-button>
                                    </div>
                                </div>
                                
                                <ul class = "navbar-nav ml-lg-auto">
                                    <li class = "nav-item">
                                        <a class = "nav-link nav-link-icon" href = "#">
                                            <i class = "ni ni-favourite-28"></i>
                                            <span class = "nav-link-inner--text d-lg-none">Discover</span>
                                        </a>
                                    </li>
                                    <li class = "nav-item">
                                        <a class = "nav-link nav-link-icon" href = "#">
                                            <i class = "ni ni-notification-70"></i>
                                            <span class = "nav-link-inner--text d-lg-none">Profile</span>
                                        </a>
                                    </li>
                                    <li class = "nav-item dropdown">
                                        <a aria-expanded = "false" aria-haspopup = "true"
                                           class = "nav-link nav-link-icon" data-toggle = "dropdown"
                                           href = "#" id = "nav-inner-success_dropdown_1" role = "button">
                                            <i class = "ni ni-settings-gear-65"></i>
                                            <span class = "nav-link-inner--text d-lg-none">Settings</span>
                                        </a>
                                        <div aria-labelledby = "nav-inner-success_dropdown_1"
                                             class = "dropdown-menu dropdown-menu-right">
                                            <a class = "dropdown-item" href = "#">Action</a>
                                            <a class = "dropdown-item" href = "#">Another action</a>
                                            <div class = "dropdown-divider"></div>
                                            <a class = "dropdown-item" href = "#">Something else here</a>
                                        </div>
                                    </li>
                                </ul>
                            </base-nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
    import BaseNav from "@/components/BaseNav";
    import CloseButton from "@/components/CloseButton";

    export default {
        components: {
            BaseNav,
            CloseButton
        },
        data() {
            return {
                checkboxes: {
                    unchecked: false,
                    checked: true,
                    uncheckedDisabled: false,
                    checkedDisabled: true
                },
                radio: {
                    radio1: "radio1",
                    radio2: "radio3"
                },
                switches: {
                    off: false,
                    on: true
                },
                sliders: {
                    slider1: 0,
                    slider2: [150, 400]
                }
            };
        }
    };
</script>
<style>
</style>

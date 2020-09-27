<template>
    <!-- Modals -->
    <div class = "row">
        <div class = "col-md-4">
            <base-button @click = "modals.modal1 = true" block class = " mb-3" type = "primary">
                Default
            </base-button>
            <modal :show.sync = "modals.modal1">
                <h6 class = "modal-title" id = "modal-title-default" slot = "header">Type your modal title</h6>
                
                <p>Far far away, behind the word mountains, far from the countries Vokalia and
                   Consonantia, there live the blind texts. Separated they live in Bookmarksgrove
                   right at the coast of the Semantics, a large language ocean.</p>
                <p>A small river named Duden flows by their place and supplies it with the necessary
                   regelialia. It is a paradisematic country, in which roasted parts of sentences
                   fly into your mouth.</p>
                
                <template slot = "footer">
                    <base-button type = "primary">Save changes</base-button>
                    <base-button @click = "modals.modal1 = false" class = "ml-auto" type = "link">Close
                    </base-button>
                </template>
            </modal>
        </div>
        <div class = "col-md-4">
            <base-button @click = "modals.modal2 = true" block class = " mb-3" type = "warning">
                Notification
            </base-button>
            
            <modal :show.sync = "modals.modal2"
                   gradient = "danger"
                   modal-classes = "modal-danger modal-dialog-centered">
                <h6 class = "modal-title" id = "modal-title-notification" slot = "header">Your attention is
                                                                                          required</h6>
                
                <div class = "py-3 text-center">
                    <i class = "ni ni-bell-55 ni-3x"></i>
                    <h4 class = "heading mt-4">You should read this!</h4>
                    <p>A small river named Duden flows by their place and supplies it with the
                       necessary regelialia.</p>
                </div>
                
                <template slot = "footer">
                    <base-button type = "white">Ok, Got it</base-button>
                    <base-button @click = "modals.modal2 = false"
                                 class = "ml-auto"
                                 text-color = "white"
                                 type = "link">
                        Close
                    </base-button>
                </template>
            </modal>
        </div>
        <div class = "col-md-4">
            <base-button @click = "modals.modal3 = true" block class = " mb-3" type = "default">
                Form
            </base-button>
            
            <modal :show.sync = "modals.modal3"
                   body-classes = "p-0"
                   modal-classes = "modal-dialog-centered modal-sm">
                <card body-classes = "px-lg-5 py-lg-5" class = "border-0"
                      header-classes = "bg-white pb-5"
                      shadow
                      type = "secondary">
                    <template>
                        <div class = "text-muted text-center mb-3">
                            <small>Sign in with</small>
                        </div>
                        <div class = "btn-wrapper text-center">
                            <base-button type = "neutral">
                                <img slot = "icon" src = "img/icons/common/github.svg">
                                Github
                            </base-button>
                            
                            <base-button type = "neutral">
                                <img slot = "icon" src = "img/icons/common/google.svg">
                                Google
                            </base-button>
                        </div>
                    </template>
                    <template>
                        <div class = "text-center text-muted mb-4">
                            <small>Or sign in with credentials</small>
                        </div>
                        <form role = "form">
                            <base-input addon-left-icon = "ni ni-email-83"
                                        alternative
                                        class = "mb-3"
                                        placeholder = "Email">
                            </base-input>
                            <base-input addon-left-icon = "ni ni-lock-circle-open"
                                        alternative
                                        placeholder = "Password"
                                        type = "password">
                            </base-input>
                            <base-checkbox>
                                Remember me
                            </base-checkbox>
                            <div class = "text-center">
                                <base-button class = "my-4" type = "primary">Sign In</base-button>
                            </div>
                        </form>
                    </template>
                </card>
            </modal>
        </div>
    </div>
</template>
<script>
    import Modal from "@/components/Modal.vue";

    export default {
        components: {
            Modal
        },
        data() {
            return {
                modals: {
                    modal1: false,
                    modal2: false,
                    modal3: false
                }
            };
        }
    };
</script>
<style>
</style>

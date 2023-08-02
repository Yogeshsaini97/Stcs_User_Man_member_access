<script setup>
import { inject, onMounted } from "vue";
import listpage from "../../Global/ListPage.ce.vue"
import Tabs from "../../Tabs/Tabs.vue"
import Tab from "../../Tabs/Tab.vue"


const assigned_to_me_Url = import.meta.env.VITE_APP_ROOT_API+`/assignedtomes/?p_auth=${Liferay.authToken}`;
const assigned_to_my_roles = import.meta.env.VITE_APP_ROOT_API+`/assignedtomyroles/?p_auth=${Liferay.authToken}`;




</script>

<template>
    <div class="tab-pane " id="four" role="tabpanel" aria-labelledby="foue-tab">
        <div class="row">
          <div class="col-md-3 border-right mnh-md-400p">
            <h2 class="mt-4 line-height-15">Member<br />access</h2>
            <div class="mt-4">
              <p class="text-grey">You have <span class="text-danger">4 pending</span> approvals</p>
            </div>
          </div>  
          <div class="col-md-9">
            <div class="table-responsive mt-3">

              <Tabs>
                <Tab active="true" id="Assigned to me" title="Assigned to me">
            
                  <div >
                    <listpage :url="assigned_to_me_Url" />
                  </div>
                </Tab>
                <Tab title="Assigned to my roles" id="Assigned to my roles">
                  <div >
                     <listpage :url="assigned_to_my_roles" />
                  </div>
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
</template>
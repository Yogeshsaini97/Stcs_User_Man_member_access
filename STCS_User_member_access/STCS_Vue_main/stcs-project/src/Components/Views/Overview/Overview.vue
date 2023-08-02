<script setup>
import { inject, ref } from 'vue';
import { ChangeDateFormat } from '../../../Utils/Utils';
const ProjectGetOneData = inject("ProjectGetOneData");
const api2Data = inject("api2Data");
const no_of_Issues = inject("no_of_Issues");
const no_of_Risks = inject("no_of_Risks");
</script>


<template>
  <div class="tab-content" id="myTabContent">
    <div class="tab-pane fade show active" id="one" role="tabpanel" aria-labelledby="one-tab">
      <div class="row">
        <div class="col-md-3 border-right">
          <h2 class="mt-4 line-height-15">Member<br />Overview</h2>
          <div class="mt-4">
            <p class="mb-1 text-default">Created on</p>
            <p class="mb-0">Mar 12th, 2023</p>
            <p>12.35 pm</p>
          </div>
        </div>
        <div class="col-md-9">
          <div class="custom-form mt-3">
            <div class="row">
              <div class="col-12 col-md-6">
                <div class="form-group mb-4">
                  <label>Full name</label>
                  <input type="text" class="form-control" placeholder="Enter Full name" value="David Elson" />
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="form-group mb-4">
                  <label>Email address</label>
                  <input type="email" class="form-control" placeholder="Enter Email address"
                    value="muhammad.asad@moh.ksa.com" />
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="form-group mb-4">
                  <label>Phone</label>
                  <input type="text" class="form-control" placeholder="Enter Phone" value="+966 7857126532" />
                </div>
              </div>
              <div class="col-12 col-md-6"></div>
              <div class="col-12 col-md-6">
                <div class="form-group mb-4">
                  <label>Government / Entity</label>
                  <input type="text" class="form-control" placeholder="Government" />
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="form-group mb-4">
                  <label>Department</label>
                  <input type="text" class="form-control" placeholder="Ministry of Health" />
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="form-group">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck">
                    <label class="form-check-label text-dark font-10 ml-3" for="gridCheck">
                      Dolor ut ab sit. Ut vero maiores autem culpa corrupti reiciendis aspernatur. Sint blanditiis
                      dignissimos ut non enim error. Dolor ut ab sit.
                    </label>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-12">
                <div class="mt-md-100 mb-4 d-flex">
                  <button type="button" class="btn btn-default px-40">Assign role & privileges</button>
                  <button type="button" class="btn btn-light px-40 ml-3">Reject member access</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="tab-pane fade" id="two" role="tabpanel" aria-labelledby="two-tab">
      <div class="row">
        <div class="col-md-3 border-right">
          <h2 class="mt-4 line-height-15">Roles &<br />privileges</h2>
          <div class="mt-4">
            <p class="mb-1 text-default">Created on</p>
            <p class="mb-0">Mar 12th, 2023</p>
            <p>12.35 pm</p>
          </div>
        </div>
        <div class="col-md-9">
          <div class="custom-form mt-3">
            <div class="row">
              <div class="col-12 col-md-6">
                <div class="form-group mb-4">
                  <label>Assign role</label>
                  <select class="form-control">
                    <option>Project manager</option>
                  </select>
                </div>
                <h4 class="text-default mt-4 mb-3">Assign projects</h4>
                <div class="form-group mb-4">
                  <label>Search projects</label>
                  <input type="search" class="form-control" value="Installation" placeholder="Project code / name" />
                </div>
                <div class="d-flex mb-3">
                  <button type="button" class="btn btn-light border-light-red rounded-15 p-3 mr-3"><img src="../assets/images/icon-trash.svg" alt="img" /></button>
                  <p class="mb-0 mt-1">Installation & device with contract<br /><span class="text-grey">STCS - 000938</span></p>
                </div>
                <div class="d-flex mb-3">
                  <button type="button" class="btn btn-light border-light-red rounded-15 p-3 mr-3"><img src="../assets/images/icon-trash.svg" alt="img" /></button>
                  <p class="mb-0 mt-1">Installation & device with contract<br /><span class="text-grey">STCS - 000938</span></p>
                </div>
                <div class="d-flex mb-3">
                  <button type="button" class="btn btn-light border-light-red rounded-15 p-3 mr-3"><img src="../assets/images/icon-trash.svg" alt="img" /></button>
                  <p class="mb-0 mt-1">Installation & device with contract<br /><span class="text-grey">STCS - 000938</span></p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12 col-md-12">
                <h4 class="text-default mt-4 mb-3">This member can,</h4>
              </div>
              <div class="col-12 col-md-6">
                <div class="form-group">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck1" checked>
                    <label class="form-check-label text-dark font-10 ml-3" for="gridCheck1">
                      Projects<br /><span class="text-grey">Dolor ut ab sit. Ut vero maiores autem</span>
                    </label>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="form-group">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck2" checked>
                    <label class="form-check-label text-dark font-10 ml-3" for="gridCheck2">
                      Risks & issues<br /><span class="text-grey">Dolor ut ab sit. Ut vero maiores autem</span>
                    </label>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="form-group">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck3">
                    <label class="form-check-label text-dark font-10 ml-3" for="gridCheck3">
                      Milestones<br /><span class="text-grey">Dolor ut ab sit. Ut vero maiores autem</span>
                    </label>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="form-group">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck4">
                    <label class="form-check-label text-dark font-10 ml-3" for="gridCheck4">
                      Stakeholders<br /><span class="text-grey">Dolor ut ab sit. Ut vero maiores autem</span>
                    </label>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="form-group">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck5">
                    <label class="form-check-label text-dark font-10 ml-3" for="gridCheck5">
                      Tasks<br /><span class="text-grey">Dolor ut ab sit. Ut vero maiores autem</span>
                    </label>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="form-group">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck6">
                    <label class="form-check-label text-dark font-10 ml-3" for="gridCheck6">
                      Approvals<br /><span class="text-grey">Dolor ut ab sit. Ut vero maiores autem</span>
                    </label>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="form-group">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck7">
                    <label class="form-check-label text-dark font-10 ml-3" for="gridCheck7">
                      Marketplace<br /><span class="text-grey">Dolor ut ab sit. Ut vero maiores autem</span>
                    </label>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="form-group">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck8">
                    <label class="form-check-label text-dark font-10 ml-3" for="gridCheck8">
                      Invoices<br /><span class="text-grey">Dolor ut ab sit. Ut vero maiores autem</span>
                    </label>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-12">
                <div class="my-4">
                  <button type="button" class="btn btn-default px-40">Save & proceed</button>
                  <button type="button" class="btn btn-light px-40 ml-3">Reject member access</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="tab-pane fade" id="three" role="tabpanel" aria-labelledby="three-tab">
      <div class="row">
        <div class="col-md-3 border-right mnh-375p">
          <h2 class="mt-4 line-height-15">Channel &<br />frequency</h2>
          <div class="mt-4">
            <p class="mb-1 text-default">Created on</p>
            <p class="mb-0">Mar 12th, 2023</p>
            <p>12.35 pm</p>
          </div>
        </div>
        <div class="col-md-9">
          <div class="custom-form mt-3">
            <div class="row">
              <div class="col-12 col-md-6">
                <div class="form-group mb-4">
                  <label>Channel</label>
                  <select class="form-control">
                    <option>Select</option>
                  </select>
                </div>
                <div class="form-group mb-4">
                  <label>Frequency</label>
                  <select class="form-control">
                    <option>Select</option>
                  </select>
                </div>
              </div>
              <div class="col-12 col-md-12">
                <div class="mt-200">
                  <button type="button" class="btn btn-default px-40">Grand member access</button>
                  <button type="button" class="btn btn-light px-40 ml-3">Reject member access</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
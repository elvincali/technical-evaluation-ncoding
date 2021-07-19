<template>
  <q-dialog
    ref="enroll-modal"
    :value="value"
    transition-show="slide-down"
    transition-hide="slide-up"
    position="top"
    content-class="my-dialog"
    @input="$emit('input', $event)"
  >
    <q-card class="my-card">
      <div class="q-px-md-xl q-px-xs-md q-pt-md">
        <div class="flex justify-center q-mt-xl q-mb-md">
          <div class="text-h5 text-center text-weight-bold">
            Application Process - {{ $store.state.availableCourses.courseForEnroll.title }}
          </div>
        </div>
        <div class="row q-my-md">
          <div class="col-md-6 col-xs-12">
            <q-btn
              rounded
              color="black"
              size="md"
              label="1"
            />
            <span class="title-step">
              Personal Information
            </span>
          </div>
          <div class="col-md-6 col-xs-12 text-right">
            <q-btn
              disable
              rounded
              color="black"
              size="md"
              label="3"
            />
            <span class="title-step">
              Payment Plan
            </span>
          </div>
        </div>
        <div class="row q-my-md">
          <div class="col-12 text-center background-duration q-pa-sm">
            <span class="text-black title-step">
              Start: May '21 | Graduation: Dec. '21
            </span>
          </div>
        </div>
        <keep-alive ref="enr">
          <component :is="stepComponent" ref="step" />
        </keep-alive>
        <div style="height: 130px"></div>
        <q-toolbar
          class="bg-white q-toolbar--bordered justify-between q-px-none"
          style="height: 60px"
        >
          <q-btn
            no-caps
            rounded
            color="black"
            label="Back"
            @click="backStep"
          />
          <q-btn
            no-caps
            rounded
            color="black"
            :label="textButtonNext"
            @click="nextStep"
          />
        </q-toolbar>
      </div>
    </q-card>
  </q-dialog>
</template>

<script>
import PaymentPlan from 'src/modules/available-courses/components/PaymentPlan';
import { call } from 'vuex-pathify';
import PersonalDetails from './PersonalDetails';

const STEP = { PERSONAL_INFO: 'personal-info', PAYMENT_PLAN: 'payment-plan' };

export default {
  name: 'EnrollModal',
  components: {
    PersonalDetails,
    PaymentPlan,
  },
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      stepCurrent: STEP.PERSONAL_INFO,
      steps: [STEP.PERSONAL_INFO, STEP.PAYMENT_PLAN],
    };
  },
  computed: {
    stepComponent() {
      return this.stepCurrent === STEP.PERSONAL_INFO ? PersonalDetails : PaymentPlan;
    },
    textButtonNext() {
      const positionIndex = this.steps.findIndex((step) => step === this.stepCurrent);
      const isCompletedAllSteps = this.steps.length === (positionIndex + 1);
      return isCompletedAllSteps ? 'Submit Enrollment' : 'Next';
    },
  },
  methods: {
    ...call('enroll', ['enroll']),
    async nextStep() {
      const formStepSuccess = await this.$refs.step.validate();
      if (!formStepSuccess) return;

      const positionIndex = this.steps.findIndex((step) => step === this.stepCurrent);
      const isCompletedAllSteps = this.steps.length === (positionIndex + 1);

      if (isCompletedAllSteps) {
        // complete all, execute submit!
        await this.enroll();
        this.$router.push({ name: 'my-courses' });
        this.closeModal();
        return;
      }
      this.stepCurrent = this.steps[positionIndex + 1];
    },
    backStep() {
      const positionIndex = this.steps.findIndex((step) => step === this.stepCurrent);
      if (positionIndex === 0) {
        // step initial
        return;
      }
      this.stepCurrent = this.steps[positionIndex - 1];
    },
    closeModal() {
      this.$refs['enroll-modal'].hide();
    },
  },
};
</script>

<style lang="scss" scoped>
  .my-card {
    margin-top: 42px;
    border-radius: 12px !important;
    width: 844px;
    max-width: 1366px;
  }
  .my-dialog {
    padding: 16px 0 68px;
  }

  .q-toolbar--bordered {
    border-top: 1px solid rgba(0, 20, 50, 0.1);
  }
  .title-step {
    font-size: 1rem;
  }
  .background-duration {
    background: #F3F5F7;
  }
</style>

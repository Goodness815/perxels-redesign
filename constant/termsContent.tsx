export interface TermsContentProps {
  id: number
  slug: string
  termsTitle: string
  termsContent1: string
  termsContent2?: string
  termsContent3?: string
  termsContent4?: string
  termsContent5?: string
  termsSubTitle1?: string
  termsSubTitle2?: string
  termsList?: string[]
  defermentRequest?: { type: string; content: string; children?: string[] }[]
}

export interface TermsNavLink {
  name: string
  url: string
}

export const TermsContentObj: TermsContentProps[] = [
  {
    id: 1,
    slug: 'payment-policy',
    termsTitle: 'Payment Policy',
    termsContent1:
      'All enrollees of Perxels Design School are required to make an upfront payment of fees as determined by the payment plan and method for their course.',
    termsContent2:
      'For installment payments, enrollees are expected to settle the remaining balance in monthly installments as specified by the chosen payment plan. Failure to do this would be met with repercussions such as denial of entry into classes.',
    termsContent3:
      'For one-time payments, enrollees are expected to make full payment before the commencement of classes. Failure to do this would be met with repercussions such as denial of entry into classs.',
    termsSubTitle1: 'Note',
    termsList: [
      'No refunds on fee payment would be made by Perxels after the first (1st) week of training by an enrollee who has begun training.',
      'In the event of payment for a course being made and the enrollee has not commenced training, 70% of the money will be refunded to the enrollee in 30days, with the remaining 30% allocated to perxels.',
      'After the period of one (1) month, no refunds would be made by Perxels, even in cases where the enrollee has not begun training.',
    ],
  },
  {
    id: 2,
    slug: 'student-eligibility',
    termsTitle: 'Student Eligibility',
    termsContent1:
      'Perxels provides UIUX Design education for anyone between the age of 17-50 years who have a financial income of any sort and can make payment for education.',
  },
  {
    id: 3,
    slug: 'payment-plans',
    termsTitle: 'Payment Plans',
    termsContent1:
      'At Perxels Design School, we offer convenient payment plan options for students who prefer to pay for their program in multiple installments. To provide flexibility, we have established the following payment arrangement:',
    termsContent2:
      'Students can choose to make an initial upfront payment of 60% of the total program cost. The remaining balance can be paid after one month, allowing students to manage their financial commitments more effectively.',
    termsContent3:
      'This payment plan structure ensures that students can secure their enrollment with a significant upfront payment and have a reasonable timeframe to settle the remaining amount.',
  },
  {
    id: 4,
    slug: 'default-sanction',
    termsTitle: 'Default Sanction',
    termsContent1:
      'Perxels Design School reserves the right to take necessary legal actions if a student fails to meet their repayment obligations for one month.',
    termsContent2:
      'In the event of default on payment after one month, Perxels Design School may initiate legal proceedings to recover the outstanding balance.',
    termsContent3:
      'We encourage students to communicate with our financial services department in case of any financial difficulties or unforeseen circumstances that may affect their ability to make timely payments.',
  },
  {
    id: 5,
    slug: 'program-deferment',
    termsTitle: 'Perxels Design School Program Deferment Policy',
    termsContent1:
      'At Perxels Design School, we understand that certain life events, such as National Youth Service Corps (NYSC) obligations, weddings, funerals, or other valid reasons, may require students to temporarily pause their enrollment. To accommodate such situations, we allow students to defer their program enrollment for a maximum duration of one (1) month.',
    termsSubTitle1: 'Key Deferment Guidelines:',
    termsList: [
      'During the deferment period, the student’s participation in the program is temporarily suspended.',
      'The deferment is strictly limited to one month. After this period, the student must re-enroll to regain access to the program.',
      'No refunds will be provided after the one-month deferment period.',
      'Re-enrollment is subject to class availability. If the next available class is full, the deferred student will have to wait for an open slot, even if it takes up to a year.',
    ],
    termsContent4:
      'Additional deferments beyond one month will attract a charge of ₦10,000 per month of deferment.',
    termsSubTitle2: 'How to Request a Deferment:',
    defermentRequest: [
      {
        type: 'text',
        content:
          'Send an email to Perxels Design School at perxelsmanager@gmail.com.',
      },
      { type: 'text', content: "Use the subject line: 'PROGRAM DEFERMENT'." },
      {
        type: 'list',
        content: 'Include the following details in your email:',
        children: [
          'Full name',
          'Current class',
          'Last project completed',
          'Reason for deferment',
        ],
      },

      {
        type: 'text',
        content:
          'All follow-ups should be done within the same email thread for proper documentation.',
      },
    ],
    termsContent5:
      'By submitting a deferment request, students acknowledge and accept the terms outlined above.',
  },
  {
    id: 6,
    slug: 'program-access',
    termsTitle: 'Program Access',
    termsContent1:
      'At Perxels Design School, a student is granted access to the Slack channel for a period of 1 year following the completion of their program. After the specified duration of 1 year, all rights and access to the Slack channel will be terminated.',
    termsContent2:
      'In the event that a student cancels their program after the class has commenced, they will be promptly removed from the Slack channel, and their access to the program content will be revoked.',
    termsContent3:
      'We kindly remind students to carefully consider their commitment to the program before enrollment, as once the class has started, program cancellations will result in the immediate removal of access to the learning platform.',
  },
  {
    id: 7,
    slug: 'puntuality',
    termsTitle: 'Punctuality',
    termsContent1:
      'At Perxels Design School, trainings are hands-on and practical. As such, punctuality is encouraged at all times. Students are advised to join classes within the stipulated time. In cases of lateness, students are mandated to inform their tutor before commencement of classes, so that provisions can be made to accommodate such students during lectures.',
  },
  {
    id: 8,
    slug: 'certification',
    termsTitle: 'Certification',
    termsContent1:
      "At the completion of training at Perxels, students are required to fill out a form provided. This is compulsory for the processing of Students' certificates.",
    termsContent2:
      'For students who had missed out on this, they are required to send an email to perxelsmanager@gmail.com requesting for the form ',
    termsContent3:
      'Certificates are sent out every first week of every month to students who have completed training and met all requirements for graduation.',
  },
  {
    id: 9,
    slug: 'contact-us',
    termsTitle: 'Contact Us',
    termsContent1:
      'For questions, inquiries, and suggestions about our Privacy Policy, do not hesitate to Contact Us at perxelsmanager@gmail.com.',
  },
]

export const TermsNavLink: TermsNavLink[] = [
  {
    name: 'Payment Policy',
    url: 'payment-policy',
  },
  {
    name: 'Student Eligibility',
    url: 'student-eligibility',
  },
  {
    name: 'Payment Plans',
    url: 'payment-plans',
  },
  {
    name: 'Default Sanction',
    url: 'default-sanction',
  },
  {
    name: 'Program Deferment',
    url: 'program-deferment',
  },
  {
    name: 'Program Access',
    url: 'program-access',
  },
  {
    name: 'Punctuality',
    url: 'puntuality',
  },
  {
    name: 'Certification',
    url: 'certification',
  },
  {
    name: 'Contact Us',
    url: 'contact-us',
  },
]

# Keyboard and accessibility tree

Base URL: http://localhost:4321/vyuha-site-solo-scope

Overall: every page passes in every engine.

## chromium 158.0.8127.18

### / (vyuha)

- Result: pass
- Landmarks: header, nav "Main", main, footer, nav "Footer"
- `aria-current="page"`: Home
- Headings: h1 vyuha is where a small team runs a company of AI agents. · h2 Agents pick up the work you already track. · h2 Every run leaves evidence. · h2 The company stays governed. · h2 Built for teams that answer for their work. · h3 Founders and small product teams · h3 Engineering leads adopting coding agents · h3 Services firms and support shops · h2 Seven ideas, in plain words. · h2 Start with the guide.
- Links: 23, all named: yes
- Tab order (23 stops, visible focus on every stop: yes): Skip to content → vyuha → Home → Model → Guide → FAQ → Read the getting-started guide → Request access → WorkTeams, projects, issues, cycles, milestones. → AgentsRun real coding harnesses on your machines. → DecisionsAutonomous, notify or approve. → EvidenceCommands, tests, screenshots, pull requests. → PlaybooksStages from charter to release. → PodsThe roles a stage needs. → BudgetsLimits and spending thresholds. → Read the getting-started guide → Request access → Home → Model → Guide → FAQ → Request access → Site source on GitHub

<details><summary>ARIA snapshot</summary>

```yaml
- link "Skip to content":
  - /url: "#main"
- banner:
  - link "vyuha":
    - /url: /vyuha-site-solo-scope/
  - navigation "Main":
    - list:
      - listitem:
        - link "Home":
          - /url: /vyuha-site-solo-scope/
      - listitem:
        - link "Model":
          - /url: /vyuha-site-solo-scope/model/
      - listitem:
        - link "Guide":
          - /url: /vyuha-site-solo-scope/guide/
      - listitem:
        - link "FAQ":
          - /url: /vyuha-site-solo-scope/faq/
- main:
  - paragraph: Agents, governed
  - heading "vyuha is where a small team runs a company of AI agents." [level=1]
  - paragraph: For founders, engineering leads and services firms who want agents to do real work, with evidence for every run and decisions under rules you set.
  - link "Read the getting-started guide":
    - /url: /vyuha-site-solo-scope/guide/
  - link "Request access":
    - /url: https://github.com/vyuhalabs/vyuha-site-solo-scope/issues/new?template=access-request.md
  - paragraph: Access is by request, through an issue on the public repository.
  - 'figure "The Inbox: decisions that need a person, each with its evidence. The illustration shows an Inbox with four entries. Two need approval: merging pull request #128 for issue ENG-42 after five of five checks were verified, and raising a pod budget from $40 to $60 for the cycle. One is a notify decision: a verified dependency update that merges unless you object. One was autonomous: tests and lint ran and were recorded in the audit trail."'
  - region "Agents pick up the work you already track.":
    - paragraph: 01 · Work
    - heading "Agents pick up the work you already track." [level=2]
    - paragraph: Work lives in teams, projects, issues, cycles and milestones, the way a product team already tracks it. Agents pick it up and run real coding harnesses, Claude Code first and others through adapters, on machines you control.
    - paragraph: A playbook takes an engagement from charter to release. At each stage a pod hires the roles that stage needs.
    - figure "A playbook's stages, with the pod each stage hires. The illustration shows a playbook for a billing service with five stages. Charter, led by a person, and Plan, run by a planner agent, are done. Build is in progress with two builder agents and seven of eleven issues finished; it exits when every issue is verified. Verify, with a reviewer agent and a QA agent, and Release, with a release agent, are waiting. Release exits only when the release is approved."
  - region "Every run leaves evidence.":
    - paragraph: 02 · Evidence
    - heading "Every run leaves evidence." [level=2]
    - paragraph: "Everything an agent does leaves evidence: the commands it ran, the tests, screenshots and the pull request. A person or a reviewer agent checks it before the work counts as done."
    - paragraph: vyuha merges after review and verification, and the decision tier says whether a person approves first or may object.
    - 'figure "A run and the evidence it left. The illustration shows run r-2381 for issue ENG-42, Add CSV export to invoices, marked verified. A builder agent ran it with the claude-code harness on the machine build-02 and spent $1.84 of a $5.00 budget. Its evidence: the test command passed 148 tests with exit code 0, the lint command reported no problems, a screenshot of the export, pull request #128 changing six files, and an approval from the reviewer agent."'
  - region "The company stays governed.":
    - paragraph: 03 · Control
    - heading "The company stays governed." [level=2]
    - paragraph: "Every decision has a tier: autonomous, notify or approve. Budgets and spending thresholds limit what agents spend. Decisions that need a person wait in the Inbox."
    - paragraph: Every action is in the audit trail, and a stop button halts every run within two seconds.
    - 'figure "The decision matrix: each kind of action has a tier. The illustration shows a decision policy for a billing service. Autonomous: run tests and linters, open a pull request. Notify, where a person is told and may object: merge a dependency update. Approve, where a person decides first in the Inbox: merge a feature, spend above the cycle threshold, release to production. vyuha merges after review and verification, and the decision tier says whether a person approves first or may object."'
  - region "Built for teams that answer for their work.":
    - paragraph: Who it is for
    - heading "Built for teams that answer for their work." [level=2]
    - list:
      - listitem:
        - heading "Founders and small product teams" [level=3]
        - paragraph: You want agents to do real work, not demos, without losing control of your codebase, your spend or your customers.
      - listitem:
        - heading "Engineering leads adopting coding agents" [level=3]
        - paragraph: You need review, evidence and policy around agents before their work reaches your main branch.
      - listitem:
        - heading "Services firms and support shops" [level=3]
        - paragraph: You run work for clients and must show who did what, when and why.
  - region "Seven ideas, in plain words.":
    - paragraph: The model
    - heading "Seven ideas, in plain words." [level=2]
    - list:
      - listitem:
        - link "Work Teams, projects, issues, cycles, milestones.":
          - /url: /vyuha-site-solo-scope/model/#work
      - listitem:
        - link "Agents Run real coding harnesses on your machines.":
          - /url: /vyuha-site-solo-scope/model/#agents
      - listitem:
        - link "Decisions Autonomous, notify or approve.":
          - /url: /vyuha-site-solo-scope/model/#decisions
      - listitem:
        - link "Evidence Commands, tests, screenshots, pull requests.":
          - /url: /vyuha-site-solo-scope/model/#evidence
      - listitem:
        - link "Playbooks Stages from charter to release.":
          - /url: /vyuha-site-solo-scope/model/#playbooks
      - listitem:
        - link "Pods The roles a stage needs.":
          - /url: /vyuha-site-solo-scope/model/#pods
      - listitem:
        - link "Budgets Limits and spending thresholds.":
          - /url: /vyuha-site-solo-scope/model/#budgets
  - region "Start with the guide.":
    - heading "Start with the guide." [level=2]
    - paragraph: "The getting-started guide walks you through the first steps once you have access. Access is by request: open an issue from the access-request template and say what you want agents to work on."
    - link "Read the getting-started guide":
      - /url: /vyuha-site-solo-scope/guide/
    - link "Request access":
      - /url: https://github.com/vyuhalabs/vyuha-site-solo-scope/issues/new?template=access-request.md
- contentinfo:
  - paragraph: vyuha
  - paragraph: "Sanskrit for a formation: an arrangement of forces that moves as one."
  - navigation "Footer":
    - list:
      - listitem:
        - link "Home":
          - /url: /vyuha-site-solo-scope/
      - listitem:
        - link "Model":
          - /url: /vyuha-site-solo-scope/model/
      - listitem:
        - link "Guide":
          - /url: /vyuha-site-solo-scope/guide/
      - listitem:
        - link "FAQ":
          - /url: /vyuha-site-solo-scope/faq/
      - listitem:
        - link "Request access":
          - /url: https://github.com/vyuhalabs/vyuha-site-solo-scope/issues/new?template=access-request.md
      - listitem:
        - link "Site source on GitHub":
          - /url: https://github.com/vyuhalabs/vyuha-site-solo-scope
  - paragraph: This site sets no cookies and loads nothing from third parties.
```

</details>

### /model/ (The model · vyuha)

- Result: pass
- Landmarks: header, nav "Main", main, aside, nav "How vyuha works, in seven parts: sections", footer, nav "Footer"
- `aria-current="page"`: Model
- Headings: h1 How vyuha works, in seven parts · h2 Work · h2 Agents · h2 Decisions · h2 Evidence · h2 Playbooks · h2 Pods · h2 Budgets · h2 Start with the guide.
- Links: 21, all named: yes
- Tab order (21 stops, visible focus on every stop: yes): Skip to content → vyuha → Home → Model → Guide → FAQ → Work → Agents → Decisions → Evidence → Playbooks → Pods → Budgets → Read the getting-started guide → Request access → Home → Model → Guide → FAQ → Request access → Site source on GitHub

<details><summary>ARIA snapshot</summary>

```yaml
- link "Skip to content":
  - /url: "#main"
- banner:
  - link "vyuha":
    - /url: /vyuha-site-solo-scope/
  - navigation "Main":
    - list:
      - listitem:
        - link "Home":
          - /url: /vyuha-site-solo-scope/
      - listitem:
        - link "Model":
          - /url: /vyuha-site-solo-scope/model/
      - listitem:
        - link "Guide":
          - /url: /vyuha-site-solo-scope/guide/
      - listitem:
        - link "FAQ":
          - /url: /vyuha-site-solo-scope/faq/
- main:
  - paragraph: The model
  - heading "How vyuha works, in seven parts" [level=1]
  - paragraph: Work, agents, decisions, evidence, playbooks, pods and budgets. Each part in plain words, with what it looks like in the product.
  - complementary:
    - 'navigation "How vyuha works, in seven parts: sections"':
      - paragraph: On this page
      - list:
        - listitem:
          - link "Work":
            - /url: "#work"
        - listitem:
          - link "Agents":
            - /url: "#agents"
        - listitem:
          - link "Decisions":
            - /url: "#decisions"
        - listitem:
          - link "Evidence":
            - /url: "#evidence"
        - listitem:
          - link "Playbooks":
            - /url: "#playbooks"
        - listitem:
          - link "Pods":
            - /url: "#pods"
        - listitem:
          - link "Budgets":
            - /url: "#budgets"
  - region "Work":
    - paragraph: "01"
    - heading "Work" [level=2]
    - paragraph:
      - text: "Work in vyuha is tracked the way a product team already tracks it:"
      - strong: teams
      - text: own
      - strong: projects
      - text: ", projects hold"
      - strong: issues
      - text: ","
      - strong: cycles
      - text: set the pace and
      - strong: milestones
      - text: mark where a project must get to.
    - paragraph: Agents and people work from the same issues. An issue says what should change and how you will know it is done; that last part tells an agent what evidence to leave.
  - region "Agents":
    - paragraph: "02"
    - heading "Agents" [level=2]
    - paragraph:
      - text: "An agent is a role that does work: a planner, a builder, a reviewer. Agents pick up issues and run real coding harnesses, Claude Code first and others through adapters, on"
      - strong: machines you control
      - text: .
    - paragraph:
      - text: One agent’s work on one issue is a
      - strong: run
      - text: . A run starts from the issue and ends with its evidence.
  - region "Decisions":
    - paragraph: "03"
    - heading "Decisions" [level=2]
    - paragraph:
      - text: Every kind of action has a
      - strong: tier
      - text: ":"
    - list:
      - listitem:
        - strong: Autonomous
        - text: ": agents act, and the action is recorded."
      - listitem:
        - strong: Notify
        - text: ": agents act, a person is told and may object."
      - listitem:
        - strong: Approve
        - text: ": a person decides first."
    - paragraph:
      - text: Decisions that need a person wait in the
      - strong: Inbox
      - text: ", each with the evidence behind it. You set the tiers per project, in its decision policy."
    - paragraph: "Merges follow the same tiers: vyuha merges after review and verification, and the decision tier says whether a person approves first or may object."
    - 'figure "The decision matrix: each kind of action has a tier. The illustration shows a decision policy for a billing service. Autonomous: run tests and linters, open a pull request. Notify, where a person is told and may object: merge a dependency update. Approve, where a person decides first in the Inbox: merge a feature, spend above the cycle threshold, release to production. vyuha merges after review and verification, and the decision tier says whether a person approves first or may object."'
  - region "Evidence":
    - paragraph: "04"
    - heading "Evidence" [level=2]
    - paragraph:
      - text: Everything an agent does leaves
      - strong: evidence
      - text: ": the commands it ran and their exit codes, the tests, screenshots and the pull request."
    - paragraph:
      - text: A person or a reviewer agent checks the evidence against the issue before the work counts as done. Every action, by an agent or a person, is kept in the
      - strong: audit trail
      - text: ": who did what, when and why."
    - 'figure "A run and the evidence it left. The illustration shows run r-2381 for issue ENG-42, Add CSV export to invoices, marked verified. A builder agent ran it with the claude-code harness on the machine build-02 and spent $1.84 of a $5.00 budget. Its evidence: the test command passed 148 tests with exit code 0, the lint command reported no problems, a screenshot of the export, pull request #128 changing six files, and an approval from the reviewer agent."'
  - region "Playbooks":
    - paragraph: "05"
    - heading "Playbooks" [level=2]
    - paragraph:
      - text: A
      - strong: playbook
      - text: "takes an engagement from charter to release in stages: for example charter, plan, build, verify and release."
    - paragraph:
      - text: Each stage has an
      - strong: exit
      - text: ", the thing that must be true before the next stage starts, such as “the plan is approved” or “every issue is verified”. You can see at a glance where an engagement is and what it waits on."
    - figure "A playbook's stages, with the pod each stage hires. The illustration shows a playbook for a billing service with five stages. Charter, led by a person, and Plan, run by a planner agent, are done. Build is in progress with two builder agents and seven of eleven issues finished; it exits when every issue is verified. Verify, with a reviewer agent and a QA agent, and Release, with a release agent, are waiting. Release exits only when the release is approved."
  - region "Pods":
    - paragraph: "06"
    - heading "Pods" [level=2]
    - paragraph:
      - text: A
      - strong: pod
      - text: "is the set of roles a stage needs. When a stage starts, its pod hires those roles: a planner agent for planning, builder agents for the build, a reviewer agent and a QA agent to verify, and a person wherever the stage needs one."
    - paragraph: When the stage ends, so does its pod. The next stage hires the roles it needs.
  - region "Budgets":
    - paragraph: "07"
    - heading "Budgets" [level=2]
    - paragraph:
      - text: Each project has a
      - strong: budget
      - text: ", with"
      - strong: spending thresholds
      - text: . Below a threshold, agents spend within their limits. Spend above it is a decision for a person, and it waits in the Inbox like any other approval.
    - paragraph:
      - text: Every run shows what it spent against its budget. And when you need everything to stop, the
      - strong: stop button
      - text: halts every run within two seconds.
    - 'figure "A budget approval in the Inbox, next to the other decisions that need a person. The illustration shows an Inbox with four entries. Two need approval: merging pull request #128 for issue ENG-42 after five of five checks were verified, and raising a pod budget from $40 to $60 for the cycle. One is a notify decision: a verified dependency update that merges unless you object. One was autonomous: tests and lint ran and were recorded in the audit trail."'
  - region "Start with the guide.":
    - heading "Start with the guide." [level=2]
    - paragraph: "The getting-started guide walks you through the first steps once you have access. Access is by request: open an issue from the access-request template and say what you want agents to work on."
    - link "Read the getting-started guide":
      - /url: /vyuha-site-solo-scope/guide/
    - link "Request access":
      - /url: https://github.com/vyuhalabs/vyuha-site-solo-scope/issues/new?template=access-request.md
- contentinfo:
  - paragraph: vyuha
  - paragraph: "Sanskrit for a formation: an arrangement of forces that moves as one."
  - navigation "Footer":
    - list:
      - listitem:
        - link "Home":
          - /url: /vyuha-site-solo-scope/
      - listitem:
        - link "Model":
          - /url: /vyuha-site-solo-scope/model/
      - listitem:
        - link "Guide":
          - /url: /vyuha-site-solo-scope/guide/
      - listitem:
        - link "FAQ":
          - /url: /vyuha-site-solo-scope/faq/
      - listitem:
        - link "Request access":
          - /url: https://github.com/vyuhalabs/vyuha-site-solo-scope/issues/new?template=access-request.md
      - listitem:
        - link "Site source on GitHub":
          - /url: https://github.com/vyuhalabs/vyuha-site-solo-scope
  - paragraph: This site sets no cookies and loads nothing from third parties.
```

</details>

### /guide/ (Getting started · vyuha)

- Result: pass
- Landmarks: header, nav "Main", main, aside, nav "Getting started: sections", footer, nav "Footer"
- `aria-current="page"`: Guide
- Headings: h1 Getting started · h2 Before you start · h2 1. Connect a repository · h2 2. Create a project · h2 3. File a first issue · h2 4. Read a run’s evidence · h2 Where to go next
- Links: 22, all named: yes
- Tab order (22 stops, visible focus on every stop: yes): Skip to content → vyuha → Home → Model → Guide → FAQ → Open an access-request issue → Before you start → 1. Connect a repository → 2. Create a project → 3. File a first issue → 4. Read a run’s evidence → Where to go next → open an issue from the access-request template → The model → The FAQ → Home → Model → Guide → FAQ → Request access → Site source on GitHub

<details><summary>ARIA snapshot</summary>

```yaml
- link "Skip to content":
  - /url: "#main"
- banner:
  - link "vyuha":
    - /url: /vyuha-site-solo-scope/
  - navigation "Main":
    - list:
      - listitem:
        - link "Home":
          - /url: /vyuha-site-solo-scope/
      - listitem:
        - link "Model":
          - /url: /vyuha-site-solo-scope/model/
      - listitem:
        - link "Guide":
          - /url: /vyuha-site-solo-scope/guide/
      - listitem:
        - link "FAQ":
          - /url: /vyuha-site-solo-scope/faq/
- main:
  - paragraph: Guide
  - heading "Getting started" [level=1]
  - paragraph: Connect a repository, create a project, file a first issue and read the evidence of the run that follows.
  - paragraph:
    - text: Access is by request.
    - link "Open an access-request issue":
      - /url: https://github.com/vyuhalabs/vyuha-site-solo-scope/issues/new?template=access-request.md
    - text: .
  - complementary:
    - 'navigation "Getting started: sections"':
      - paragraph: On this page
      - list:
        - listitem:
          - link "Before you start":
            - /url: "#before-you-start"
        - listitem:
          - link "1. Connect a repository":
            - /url: "#1-connect-a-repository"
        - listitem:
          - link "2. Create a project":
            - /url: "#2-create-a-project"
        - listitem:
          - link "3. File a first issue":
            - /url: "#3-file-a-first-issue"
        - listitem:
          - link "4. Read a run’s evidence":
            - /url: "#4-read-a-runs-evidence"
        - listitem:
          - link "Where to go next":
            - /url: "#where-to-go-next"
  - article:
    - paragraph: "This guide covers your first steps once you have access to vyuha: connect a repository, create a project, file a first issue and read the evidence of the run that follows."
    - heading "Before you start" [level=2]
    - paragraph:
      - text: Access to vyuha is by request. To ask for it,
      - link "open an issue from the access-request template":
        - /url: https://github.com/vyuhalabs/vyuha-site-solo-scope/issues/new?template=access-request.md
      - text: "on the public repository. Say who you are, what you want agents to work on and how large your team is. Leave out personal contact details: the issue is public, and the reply comes on the issue."
    - paragraph: "Once you have access, have these ready:"
    - list:
      - listitem:
        - strong: A repository
        - text: that agents may work in. Start with one where a small change is easy to check.
      - listitem:
        - strong: A machine you control.
        - text: Agents run their coding harnesses, Claude Code first and others through adapters, on machines you control.
      - listitem:
        - strong: A first piece of work
        - text: "small enough to finish in one run: a bug with clear steps, a small feature, a test that is missing."
    - heading "1. Connect a repository" [level=2]
    - paragraph: Connect the repository you want agents to work in. Agents work on branches and propose their changes as pull requests, and the pull request is part of a run’s evidence.
    - paragraph: "Merges follow one rule: vyuha merges after review and verification, and the decision tier says whether a person approves first or may object. You set the tiers in the next step."
    - heading "2. Create a project" [level=2]
    - paragraph: "Projects belong to a team, the way they do in the tracker your team already uses. Create a project for the work you have in mind and give it:"
    - list:
      - listitem:
        - strong: A goal
        - text: in one or two sentences, so agents and people read the same intent.
      - listitem:
        - strong: A budget
        - text: for the cycle, with a spending threshold. Spend above the threshold is a decision for a person.
      - listitem:
        - strong: A decision policy.
        - text: "For each kind of action, choose a tier:"
        - emphasis: autonomous
        - text: (agents act and it is recorded),
        - emphasis: notify
        - text: (a person is told and may object) or
        - emphasis: approve
        - text: (a person decides first). If you are unsure, start with more actions on
        - emphasis: approve
        - text: and relax them later.
    - paragraph: If the work is an engagement with a beginning and an end, start it from a playbook. A playbook takes it from charter to release in stages, and a pod hires the roles each stage needs.
    - heading "3. File a first issue" [level=2]
    - paragraph: "Write the issue the way you would write it for a colleague:"
    - list:
      - listitem: What should change, in one sentence.
      - listitem: Why it matters.
      - listitem: "How you will know it is done: the commands that must pass, the screen that must look right."
    - paragraph: The last part matters most. It tells the agent what evidence to leave, and it tells the reviewer what to check. An agent picks the issue up and starts a run.
    - heading "4. Read a run’s evidence" [level=2]
    - paragraph: "Open the run from the issue. A run shows the agent that did the work, the harness and the machine it ran on, what it spent against its budget, and its evidence:"
    - list:
      - listitem:
        - strong: Commands
        - text: with their output and exit codes, such as
        - code: pnpm test
        - text: or
        - code: pnpm lint
        - text: .
      - listitem:
        - strong: Tests
        - text: ": what ran and what passed."
      - listitem:
        - strong: Screenshots
        - text: of what changed on screen, when the change is visible.
      - listitem:
        - strong: The pull request
        - text: with its diff.
      - listitem:
        - strong: The review
        - text: ": what a person or a reviewer agent checked, and the verdict."
    - paragraph: Read it as you would read a colleague’s hand-off. Does the evidence show that each point under “how you will know it is done” holds? If a decision needs you, it waits in your Inbox with the run’s evidence next to it.
    - paragraph: If anything goes wrong, the stop button halts every run within two seconds. Every action, including a stop, is in the audit trail.
    - heading "Where to go next" [level=2]
    - list:
      - listitem:
        - link "The model":
          - /url: /vyuha-site-solo-scope/model/
        - text: explains work, agents, decisions, evidence, playbooks, pods and budgets.
      - listitem:
        - link "The FAQ":
          - /url: /vyuha-site-solo-scope/faq/
        - text: answers the common questions about access, harnesses, merges and spend.
- contentinfo:
  - paragraph: vyuha
  - paragraph: "Sanskrit for a formation: an arrangement of forces that moves as one."
  - navigation "Footer":
    - list:
      - listitem:
        - link "Home":
          - /url: /vyuha-site-solo-scope/
      - listitem:
        - link "Model":
          - /url: /vyuha-site-solo-scope/model/
      - listitem:
        - link "Guide":
          - /url: /vyuha-site-solo-scope/guide/
      - listitem:
        - link "FAQ":
          - /url: /vyuha-site-solo-scope/faq/
      - listitem:
        - link "Request access":
          - /url: https://github.com/vyuhalabs/vyuha-site-solo-scope/issues/new?template=access-request.md
      - listitem:
        - link "Site source on GitHub":
          - /url: https://github.com/vyuhalabs/vyuha-site-solo-scope
  - paragraph: This site sets no cookies and loads nothing from third parties.
```

</details>

### /faq/ (FAQ · vyuha)

- Result: pass
- Landmarks: header, nav "Main", main, aside, nav "Questions and answers: sections", footer, nav "Footer"
- `aria-current="page"`: FAQ
- Headings: h1 Questions and answers · h2 What is vyuha? · h2 Who is it for? · h2 How do I get access? · h2 Which coding harnesses do agents run, and where? · h2 Does vyuha merge pull requests on its own? · h2 What counts as evidence? · h2 How do I keep spend under control? · h2 How do I stop agents? · h2 Does this site track me? · h2 Start with the guide.
- Links: 26, all named: yes
- Tab order (26 stops, visible focus on every stop: yes): Skip to content → vyuha → Home → Model → Guide → FAQ → What is vyuha? → Who is it for? → How do I get access? → Which coding harnesses do agents run, and where? → Does vyuha merge pull requests on its own? → What counts as evidence? → How do I keep spend under control? → How do I stop agents? → Does this site track me? → Open an issue from the access-request template → getting-started guide → GitHub → Read the getting-started guide → Request access → Home → Model → Guide → FAQ → Request access → Site source on GitHub

<details><summary>ARIA snapshot</summary>

```yaml
- link "Skip to content":
  - /url: "#main"
- banner:
  - link "vyuha":
    - /url: /vyuha-site-solo-scope/
  - navigation "Main":
    - list:
      - listitem:
        - link "Home":
          - /url: /vyuha-site-solo-scope/
      - listitem:
        - link "Model":
          - /url: /vyuha-site-solo-scope/model/
      - listitem:
        - link "Guide":
          - /url: /vyuha-site-solo-scope/guide/
      - listitem:
        - link "FAQ":
          - /url: /vyuha-site-solo-scope/faq/
- main:
  - paragraph: FAQ
  - heading "Questions and answers" [level=1]
  - paragraph: Short answers to the questions people ask first. For the first steps, read the getting-started guide.
  - complementary:
    - 'navigation "Questions and answers: sections"':
      - paragraph: On this page
      - list:
        - listitem:
          - link "What is vyuha?":
            - /url: "#what"
        - listitem:
          - link "Who is it for?":
            - /url: "#who"
        - listitem:
          - link "How do I get access?":
            - /url: "#access"
        - listitem:
          - link "Which coding harnesses do agents run, and where?":
            - /url: "#harnesses"
        - listitem:
          - link "Does vyuha merge pull requests on its own?":
            - /url: "#merges"
        - listitem:
          - link "What counts as evidence?":
            - /url: "#evidence"
        - listitem:
          - link "How do I keep spend under control?":
            - /url: "#spend"
        - listitem:
          - link "How do I stop agents?":
            - /url: "#stop"
        - listitem:
          - link "Does this site track me?":
            - /url: "#site"
  - region "What is vyuha?":
    - heading "What is vyuha?" [level=2]
    - paragraph: vyuha is the platform on which a small team runs a company of AI agents. Work is tracked the way a product team already tracks it, agents pick it up and run real coding harnesses on machines you control, everything they do leaves evidence that a person or a reviewer agent checks, and decisions follow tiers and budgets you set.
    - paragraph: "The name is Sanskrit for a formation: an arrangement of forces that moves as one."
  - region "Who is it for?":
    - heading "Who is it for?" [level=2]
    - list:
      - listitem: Founders and small product teams who want agents to do real work, not demos, without losing control of their codebase, their spend or their customers.
      - listitem: Engineering leads adopting coding agents who need review, evidence and policy around them.
      - listitem: Services firms and support shops that run work for clients and must show who did what, when and why.
  - region "How do I get access?":
    - heading "How do I get access?" [level=2]
    - paragraph:
      - text: Access is by request.
      - link "Open an issue from the access-request template":
        - /url: https://github.com/vyuhalabs/vyuha-site-solo-scope/issues/new?template=access-request.md
      - text: and say what you want agents to work on. The issue is public, so leave out personal contact details; the reply comes on the issue. Once you have access, the
      - link "getting-started guide":
        - /url: /vyuha-site-solo-scope/guide/
      - text: takes you through the first steps.
  - region "Which coding harnesses do agents run, and where?":
    - heading "Which coding harnesses do agents run, and where?" [level=2]
    - paragraph: "Agents run real coding harnesses: Claude Code first, others through adapters. They run on machines you control."
  - region "Does vyuha merge pull requests on its own?":
    - heading "Does vyuha merge pull requests on its own?" [level=2]
    - paragraph: vyuha merges after review and verification, and the decision tier says whether a person approves first or may object.
  - region "What counts as evidence?":
    - heading "What counts as evidence?" [level=2]
    - paragraph: "What an agent did, in a form a person can check: the commands it ran with their exit codes, test results, screenshots and the pull request. A person or a reviewer agent checks the evidence before the work counts as done, and every action is kept in the audit trail."
  - region "How do I keep spend under control?":
    - heading "How do I keep spend under control?" [level=2]
    - paragraph: Each project has a budget with spending thresholds. Spend above a threshold is a decision for a person and waits in the Inbox. Every run shows what it spent against its budget.
  - region "How do I stop agents?":
    - heading "How do I stop agents?" [level=2]
    - paragraph: The stop button halts every run within two seconds. The stop is recorded in the audit trail like every other action.
  - region "Does this site track me?":
    - heading "Does this site track me?" [level=2]
    - paragraph:
      - text: No. This site sets no cookies, runs no scripts in your browser and loads nothing from third parties. Its source is public on
      - link "GitHub":
        - /url: https://github.com/vyuhalabs/vyuha-site-solo-scope
      - text: .
  - region "Start with the guide.":
    - heading "Start with the guide." [level=2]
    - paragraph: "The getting-started guide walks you through the first steps once you have access. Access is by request: open an issue from the access-request template and say what you want agents to work on."
    - link "Read the getting-started guide":
      - /url: /vyuha-site-solo-scope/guide/
    - link "Request access":
      - /url: https://github.com/vyuhalabs/vyuha-site-solo-scope/issues/new?template=access-request.md
- contentinfo:
  - paragraph: vyuha
  - paragraph: "Sanskrit for a formation: an arrangement of forces that moves as one."
  - navigation "Footer":
    - list:
      - listitem:
        - link "Home":
          - /url: /vyuha-site-solo-scope/
      - listitem:
        - link "Model":
          - /url: /vyuha-site-solo-scope/model/
      - listitem:
        - link "Guide":
          - /url: /vyuha-site-solo-scope/guide/
      - listitem:
        - link "FAQ":
          - /url: /vyuha-site-solo-scope/faq/
      - listitem:
        - link "Request access":
          - /url: https://github.com/vyuhalabs/vyuha-site-solo-scope/issues/new?template=access-request.md
      - listitem:
        - link "Site source on GitHub":
          - /url: https://github.com/vyuhalabs/vyuha-site-solo-scope
  - paragraph: This site sets no cookies and loads nothing from third parties.
```

</details>

### /no-such-page/ (Page not found · vyuha)

- Result: pass
- Landmarks: header, nav "Main", main, footer, nav "Footer"
- `aria-current="page"`: none
- Headings: h1 This page is not here.
- Links: 14, all named: yes
- Tab order (14 stops, visible focus on every stop: yes): Skip to content → vyuha → Home → Model → Guide → FAQ → Go to the home page → Read the guide → Home → Model → Guide → FAQ → Request access → Site source on GitHub

<details><summary>ARIA snapshot</summary>

```yaml
- link "Skip to content":
  - /url: "#main"
- banner:
  - link "vyuha":
    - /url: /vyuha-site-solo-scope/
  - navigation "Main":
    - list:
      - listitem:
        - link "Home":
          - /url: /vyuha-site-solo-scope/
      - listitem:
        - link "Model":
          - /url: /vyuha-site-solo-scope/model/
      - listitem:
        - link "Guide":
          - /url: /vyuha-site-solo-scope/guide/
      - listitem:
        - link "FAQ":
          - /url: /vyuha-site-solo-scope/faq/
- main:
  - paragraph: "404"
  - heading "This page is not here." [level=1]
  - paragraph: The address may be mistyped, or the page may have moved.
  - link "Go to the home page":
    - /url: /vyuha-site-solo-scope/
  - link "Read the guide":
    - /url: /vyuha-site-solo-scope/guide/
- contentinfo:
  - paragraph: vyuha
  - paragraph: "Sanskrit for a formation: an arrangement of forces that moves as one."
  - navigation "Footer":
    - list:
      - listitem:
        - link "Home":
          - /url: /vyuha-site-solo-scope/
      - listitem:
        - link "Model":
          - /url: /vyuha-site-solo-scope/model/
      - listitem:
        - link "Guide":
          - /url: /vyuha-site-solo-scope/guide/
      - listitem:
        - link "FAQ":
          - /url: /vyuha-site-solo-scope/faq/
      - listitem:
        - link "Request access":
          - /url: https://github.com/vyuhalabs/vyuha-site-solo-scope/issues/new?template=access-request.md
      - listitem:
        - link "Site source on GitHub":
          - /url: https://github.com/vyuhalabs/vyuha-site-solo-scope
  - paragraph: This site sets no cookies and loads nothing from third parties.
```

</details>

## webkit 27.2

### / (vyuha)

- Result: pass
- Landmarks: header, nav "Main", main, footer, nav "Footer"
- `aria-current="page"`: Home
- Headings: h1 vyuha is where a small team runs a company of AI agents. · h2 Agents pick up the work you already track. · h2 Every run leaves evidence. · h2 The company stays governed. · h2 Built for teams that answer for their work. · h3 Founders and small product teams · h3 Engineering leads adopting coding agents · h3 Services firms and support shops · h2 Seven ideas, in plain words. · h2 Start with the guide.
- Links: 23, all named: yes
- Tab order (23 stops, visible focus on every stop: yes): Skip to content → vyuha → Home → Model → Guide → FAQ → Read the getting-started guide → Request access → WorkTeams, projects, issues, cycles, milestones. → AgentsRun real coding harnesses on your machines. → DecisionsAutonomous, notify or approve. → EvidenceCommands, tests, screenshots, pull requests. → PlaybooksStages from charter to release. → PodsThe roles a stage needs. → BudgetsLimits and spending thresholds. → Read the getting-started guide → Request access → Home → Model → Guide → FAQ → Request access → Site source on GitHub

### /model/ (The model · vyuha)

- Result: pass
- Landmarks: header, nav "Main", main, aside, nav "How vyuha works, in seven parts: sections", footer, nav "Footer"
- `aria-current="page"`: Model
- Headings: h1 How vyuha works, in seven parts · h2 Work · h2 Agents · h2 Decisions · h2 Evidence · h2 Playbooks · h2 Pods · h2 Budgets · h2 Start with the guide.
- Links: 21, all named: yes
- Tab order (21 stops, visible focus on every stop: yes): Skip to content → vyuha → Home → Model → Guide → FAQ → Work → Agents → Decisions → Evidence → Playbooks → Pods → Budgets → Read the getting-started guide → Request access → Home → Model → Guide → FAQ → Request access → Site source on GitHub

### /guide/ (Getting started · vyuha)

- Result: pass
- Landmarks: header, nav "Main", main, aside, nav "Getting started: sections", footer, nav "Footer"
- `aria-current="page"`: Guide
- Headings: h1 Getting started · h2 Before you start · h2 1. Connect a repository · h2 2. Create a project · h2 3. File a first issue · h2 4. Read a run’s evidence · h2 Where to go next
- Links: 22, all named: yes
- Tab order (22 stops, visible focus on every stop: yes): Skip to content → vyuha → Home → Model → Guide → FAQ → Open an access-request issue → Before you start → 1. Connect a repository → 2. Create a project → 3. File a first issue → 4. Read a run’s evidence → Where to go next → open an issue from the access-request template → The model → The FAQ → Home → Model → Guide → FAQ → Request access → Site source on GitHub

### /faq/ (FAQ · vyuha)

- Result: pass
- Landmarks: header, nav "Main", main, aside, nav "Questions and answers: sections", footer, nav "Footer"
- `aria-current="page"`: FAQ
- Headings: h1 Questions and answers · h2 What is vyuha? · h2 Who is it for? · h2 How do I get access? · h2 Which coding harnesses do agents run, and where? · h2 Does vyuha merge pull requests on its own? · h2 What counts as evidence? · h2 How do I keep spend under control? · h2 How do I stop agents? · h2 Does this site track me? · h2 Start with the guide.
- Links: 26, all named: yes
- Tab order (26 stops, visible focus on every stop: yes): Skip to content → vyuha → Home → Model → Guide → FAQ → What is vyuha? → Who is it for? → How do I get access? → Which coding harnesses do agents run, and where? → Does vyuha merge pull requests on its own? → What counts as evidence? → How do I keep spend under control? → How do I stop agents? → Does this site track me? → Open an issue from the access-request template → getting-started guide → GitHub → Read the getting-started guide → Request access → Home → Model → Guide → FAQ → Request access → Site source on GitHub

### /no-such-page/ (Page not found · vyuha)

- Result: pass
- Landmarks: header, nav "Main", main, footer, nav "Footer"
- `aria-current="page"`: none
- Headings: h1 This page is not here.
- Links: 14, all named: yes
- Tab order (14 stops, visible focus on every stop: yes): Skip to content → vyuha → Home → Model → Guide → FAQ → Go to the home page → Read the guide → Home → Model → Guide → FAQ → Request access → Site source on GitHub

## firefox 159.0

### / (vyuha)

- Result: pass
- Landmarks: header, nav "Main", main, footer, nav "Footer"
- `aria-current="page"`: Home
- Headings: h1 vyuha is where a small team runs a company of AI agents. · h2 Agents pick up the work you already track. · h2 Every run leaves evidence. · h2 The company stays governed. · h2 Built for teams that answer for their work. · h3 Founders and small product teams · h3 Engineering leads adopting coding agents · h3 Services firms and support shops · h2 Seven ideas, in plain words. · h2 Start with the guide.
- Links: 23, all named: yes
- Tab order (23 stops, visible focus on every stop: yes): Skip to content → vyuha → Home → Model → Guide → FAQ → Read the getting-started guide → Request access → WorkTeams, projects, issues, cycles, milestones. → AgentsRun real coding harnesses on your machines. → DecisionsAutonomous, notify or approve. → EvidenceCommands, tests, screenshots, pull requests. → PlaybooksStages from charter to release. → PodsThe roles a stage needs. → BudgetsLimits and spending thresholds. → Read the getting-started guide → Request access → Home → Model → Guide → FAQ → Request access → Site source on GitHub

### /model/ (The model · vyuha)

- Result: pass
- Landmarks: header, nav "Main", main, aside, nav "How vyuha works, in seven parts: sections", footer, nav "Footer"
- `aria-current="page"`: Model
- Headings: h1 How vyuha works, in seven parts · h2 Work · h2 Agents · h2 Decisions · h2 Evidence · h2 Playbooks · h2 Pods · h2 Budgets · h2 Start with the guide.
- Links: 21, all named: yes
- Tab order (22 stops, visible focus on every stop: yes): Skip to content → vyuha → Home → Model → Guide → FAQ → Work → Agents → Decisions → Evidence → Playbooks → Pods → Budgets → Read the getting-started guide → Request access → Home → Model → Guide → FAQ → Request access → Site source on GitHub → Site source on GitHub

### /guide/ (Getting started · vyuha)

- Result: pass
- Landmarks: header, nav "Main", main, aside, nav "Getting started: sections", footer, nav "Footer"
- `aria-current="page"`: Guide
- Headings: h1 Getting started · h2 Before you start · h2 1. Connect a repository · h2 2. Create a project · h2 3. File a first issue · h2 4. Read a run’s evidence · h2 Where to go next
- Links: 22, all named: yes
- Tab order (22 stops, visible focus on every stop: yes): Skip to content → vyuha → Home → Model → Guide → FAQ → Open an access-request issue → Before you start → 1. Connect a repository → 2. Create a project → 3. File a first issue → 4. Read a run’s evidence → Where to go next → open an issue from the access-request template → The model → The FAQ → Home → Model → Guide → FAQ → Request access → Site source on GitHub

### /faq/ (FAQ · vyuha)

- Result: pass
- Landmarks: header, nav "Main", main, aside, nav "Questions and answers: sections", footer, nav "Footer"
- `aria-current="page"`: FAQ
- Headings: h1 Questions and answers · h2 What is vyuha? · h2 Who is it for? · h2 How do I get access? · h2 Which coding harnesses do agents run, and where? · h2 Does vyuha merge pull requests on its own? · h2 What counts as evidence? · h2 How do I keep spend under control? · h2 How do I stop agents? · h2 Does this site track me? · h2 Start with the guide.
- Links: 26, all named: yes
- Tab order (26 stops, visible focus on every stop: yes): Skip to content → vyuha → Home → Model → Guide → FAQ → What is vyuha? → Who is it for? → How do I get access? → Which coding harnesses do agents run, and where? → Does vyuha merge pull requests on its own? → What counts as evidence? → How do I keep spend under control? → How do I stop agents? → Does this site track me? → Open an issue from the access-request template → getting-started guide → GitHub → Read the getting-started guide → Request access → Home → Model → Guide → FAQ → Request access → Site source on GitHub

### /no-such-page/ (Page not found · vyuha)

- Result: pass
- Landmarks: header, nav "Main", main, footer, nav "Footer"
- `aria-current="page"`: none
- Headings: h1 This page is not here.
- Links: 14, all named: yes
- Tab order (14 stops, visible focus on every stop: yes): Skip to content → vyuha → Home → Model → Guide → FAQ → Go to the home page → Read the guide → Home → Model → Guide → FAQ → Request access → Site source on GitHub


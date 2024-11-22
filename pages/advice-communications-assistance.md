# Incident Response Communication Guide

## Calling for Help

### Channel Selection Guidelines

1. **Private Group** (for initial triage):
   - Single environment impact
   - Minor component affected
   - Limited scope (< 5 people)
   - Uncertain team ownership
   
2. **Public Channel** (mandatory for):
   - Multi-environment impact
   - Critical component affected
   - Multiple teams involved
   - Potential widespread impact
   - Escalated incidents

### Team Engagement Protocol

1. **Development Team Engagement**:
   - Post in squad's dev channel
   - Tag relevant subject matter experts
   - Include:
     - Error logs
     - Environment details
     - Recent changes
     - Impact assessment

2. **Infrastructure Team Engagement**:
   - Contact current on-call engineer first
   - Provide:
     - Infrastructure metrics
     - Alert screenshots
     - Access issues
     - System health indicators

3. **Cross-team Collaboration**:
   - Create war room if needed
   - Establish clear communication channel
   - Designate incident commander
   - Assign note-taker

### Message Templates

1. **Initial Alert**:

```bash
🚨 Incident Alert
• Issue: [Brief description]
• Impact: [Affected services/users]
• Environment: [Dev/Staging/Prod]
• Current status: [Investigating/Identified/In Progress]
• Severity: [P1/P2/P3/P4]
• Started at: [Time]
CC: @oncall @teamlead
```

2. **Assistance Request**:

```
Need assistance with:
• Component: [System/Service name]
• Problem: [Specific issue]
• Attempted: [Actions taken so far]
• Logs: [Link to logs]
• Access needed: [Yes/No]
Priority: [Urgent/High/Medium/Low]
```

### Incident Management Process

1. **Detection & Triage**:
   - Identify severity level
   - Determine immediate response team
   - Create incident channel if needed
   - Start incident documentation

2. **Communication Flow**:
   - Updates every 30 minutes for P1
   - Updates every hour for P2
   - Updates every 2 hours for P3
   - Final update post-resolution

3. **Escalation Path**:
   ```
   L1 Support (15 min) → L2 Engineer (30 min) → Team Lead (45 min) → Department Head (60 min)
   ```

### Post-Incident Actions

1. **Immediate Actions**:
   - [ ] Post resolution update in all relevant channels:
     - Development
     - DevOps
     - Scrum
     - Status page
   - [ ] Create incident report ticket
   - [ ] Schedule immediate debrief if needed

2. **Documentation Requirements**:
   - [ ] Incident timeline
   - [ ] Root cause analysis
   - [ ] Resolution steps taken
   - [ ] Customer impact assessment
   - [ ] Prevention measures

3. **Follow-up Tasks**:
   - [ ] Create JIRA tickets for:
     - Incident documentation
     - Action items
     - System improvements
     - Process updates
   - [ ] Schedule post-mortem meeting
   - [ ] Update runbooks/documentation
   - [ ] Review monitoring/alerts

### Communication Channels Matrix

| Severity | Primary Channel | Secondary Channel | Update Frequency |
|----------|----------------|-------------------|------------------|
| P1       | #incidents     | Team Slack       | 30 min          |
| P2       | #team-channel  | Email            | 60 min          |
| P3       | #team-channel  | -                | 120 min         |
| P4       | Squad channel  | -                | Daily           |

### Incident Severity Definitions

- **P1**: Service down, customer impact
- **P2**: Degraded service, workaround exists
- **P3**: Minor impact, non-critical
- **P4**: Minimal impact, can be scheduled

### Best Practices

1. **Do's**:
   - Keep communication clear and concise
   - Use thread discussions for details
   - Document all decisions
   - Follow escalation procedures
   - Update status regularly

2. **Don'ts**:
   - Spam multiple channels
   - Leave updates hanging
   - Make assumptions
   - Work in isolation
   - Forget to close the loop



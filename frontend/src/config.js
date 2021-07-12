const NAV_LINKS = {
  'guest': [
    { label: 'Login', href: '/login' },
    { label: 'Register', href: '/register' },
    { label: 'About', href: '/about' },
    { label: 'Other Links', href: '/other' },
  ],
  'home': [
    { label: 'Workspaces', href: '/workspaces' },
    { label: 'Projects', href: '/projects' },
    { label: 'Tickets', href: '/tickets' },
    { label: 'Account', href: '/account' },
    { label: 'Sign Out', href: '/sign-out' }
  ],
  'ticket': [
    { label: '\u27F5 [project-name]', href: '/projects/[project-id]' },
    { label: 'View Docs', href: '/tickets/[id]/view' },
    { label: 'Get Help', href: '/tickets/[id]/assist' },
    { label: 'Submit', href: '/tickets/[id]/submit' },
    { label: 'Sign Out', href: '/sign-out' }
  ],
  'project': [
    { label: '\u27F5 [workspace-name]', href: '/workspaces/[workspace-id]' },
    { label: 'Tickets', href: '/projects/[id]/tickets' },
    { label: 'Open Ticket', href: '/projects/[id]/open-ticket' },
    { label: 'Team Members', href: '/projects/[id]/team' },
    { label: 'Sign Out', href: '/sign-out' }
  ],
  'workspace': [
    { label: 'Projects', href: '/workspaces/[id]/projects' },
    { label: 'Create Project', href: '/workspaces/[id]/create-project' },
    { label: 'Team Members', href: '/workspaces/[id]/team' },
    { label: 'Sign Out', href: '/sign-out' }
  ],
}

export { NAV_LINKS };
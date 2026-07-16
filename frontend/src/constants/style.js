import '../index.css';

export const styles = {
  container: {
    backgroundColor: 'var(--color-bg)', // Fixed: background-color is handled by your global body, or use bg variable here
    color: 'var(--color-deep-charcoal)', // Fixed string variable format
    minHeight: '100vh',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    overflowX: 'hidden',
    paddingBottom: '100px'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '30px 8%',
    backgroundColor: 'transparent'
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: '700',
    letterSpacing: '-0.03em',
    color: 'var(--color-deep-charcoal)'
  },
  heroSection: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '120px 20px 160px 20px',
    perspective: '1000px'
  },
  heroPerspectiveWrapper: {
    transform: 'translateZ(0)',
    zIndex: 2
  },
  heroTitle: {
    fontSize: '5rem',
    fontWeight: '800',
    letterSpacing: '-0.04em',
    margin: '0 0 20px 0',
    color: 'var(--color-deep-charcoal)',
    textShadow: `2px 4px 10px rgba(173, 156, 142, 0.15)`
  },
  heroSubtitle: {
    fontSize: '1.35rem',
    color: 'var(--color-earth-taupe)',
    maxWidth: '600px',
    margin: '0 auto 40px auto',
    lineHeight: '1.6',
    fontWeight: '400'
  },
  ctaWrapper: {
    display: 'flex',
    justifyContent: 'center'
  },
  ambient3dGlow: {
    position: 'absolute',
    width: '450px',
    height: '450px',
    borderRadius: '50%',
    background: `radial-gradient(circle, var(--color-champagne) 0%, rgba(255,255,255,0) 70%)`, // Fixed template literal variables
    top: '20%',
    left: '50%',
    transform: 'translateX(-50%) translateZ(-50px)',
    opacity: 0.5,
    zIndex: 1,
    pointerEvents: 'none'
  },
  section: {
    maxWidth: '1100px',
    margin: '0 auto 120px auto',
    padding: '0 40px'
  },
  sectionTitle: {
    fontSize: '2rem',
    fontWeight: '700',
    letterSpacing: '-0.02em',
    marginBottom: '40px',
    textAlign: 'center',
    color: 'var(--color-deep-charcoal)'
  },
  howItWorksCard: {
    backgroundColor: '#FFFFFF',
    border: `1px solid var(--color-soft-rose)`, // Fixed variable name and transparency syntax
    borderRadius: '24px',
    padding: '50px',
    display: 'flex',
    alignItems: 'center',
    gap: '40px',
    boxShadow: '0 10px 40px rgba(173, 156, 142, 0.08)'
  },
  stepNumber: {
    fontSize: '4rem',
    fontWeight: '800',
    color: 'var(--color-muted-gold)',
    opacity: 0.8,
    fontVariantNumeric: 'tabular-nums'
  },
  stepContent: {
    flex: 1
  },
  stepTitle: {
    fontSize: '1.5rem',
    fontWeight: '600',
    marginBottom: '12px',
    color: 'var(--color-deep-charcoal)'
  },
  stepDesc: {
    color: 'var(--color-earth-taupe)',
    lineHeight: '1.7',
    fontSize: '1.05rem',
    margin: 0
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '30px',
    perspective: '1000px'
  },
  featureCard: {  
    backgroundColor: '#FFFFFF',
    border: `1px solid var(--color-soft-rose)`, // Fixed hyphen matching index.css
    borderRadius: '20px',
    padding: '40px 35px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
    transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease',
    transformStyle: 'preserve-3d',
    cursor: 'pointer'
  },
  cardTitle: {
    fontSize: '1.35rem',
    fontWeight: '600',
    marginBottom: '15px',
    color: 'var(--color-deep-charcoal)',
    transform: 'translateZ(20px)'
  },
  cardDesc: {
    color: 'var(--color-earth-taupe)',
    lineHeight: '1.6',
    fontSize: '0.98rem',
    margin: 0,
    transform: 'translateZ(10px)'
  }
};

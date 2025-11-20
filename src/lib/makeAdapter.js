// Make (formerly Integromat) Automation Adapter
// Documentation: https://www.make.com/en/help/tools/webhooks

/**
 * Submit contact form to Make webhook for automation
 * @param {Object} contactData - Contact form information
 * @returns {Promise<Object>} Response from Make webhook
 */
export const submitToMake = async (contactData) => {
  const webhookUrl = import.meta.env.VITE_MAKE_API_WEBHOOK
  const apiKey = import.meta.env.VITE_MAKE_API_VALUE

  if (!webhookUrl) {
    console.warn('Make webhook URL not configured')
    return { success: true, skipped: true }
  }

  const payload = {
    name: contactData.name,
    email: contactData.email,
    phone: contactData.phone,
    message: contactData.message || '',
    language: contactData.language,
    source: 'JU-MIND Website',
    timestamp: new Date().toISOString(),
    utm_source: 'website',
    utm_medium: 'contact_form',
    // Additional fields for Make
    page_url: window.location.href,
    referrer: document.referrer || 'direct'
  }

  try {
    // Prepare headers - only include x-make-apikey if configured
    const headers = {}
    if (apiKey) {
      headers['x-make-apikey'] = apiKey
    }

    // Don't send Content-Type header to avoid CORS preflight issues
    // Make will automatically detect JSON format
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: Object.keys(headers).length > 0 ? headers : undefined,
      body: JSON.stringify(payload)
    })

    if (!response.ok) {
      throw new Error(`Make webhook failed: ${response.status}`)
    }

    // Make webhooks typically return 200 OK with "Accepted" text
    const result = await response.text()
    
    return {
      success: true,
      provider: 'make',
      data: result,
      timestamp: new Date().toISOString()
    }
  } catch (error) {
    console.error('❌ Make webhook failed:', error)
    // Don't throw - we don't want Make failure to break the form
    return { success: false, error: error.message }
  }
}


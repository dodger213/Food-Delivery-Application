import payment from '/payment.png'

export default function SiteBottomFooter() {
  return (
    <footer className="text-center py-2">
    <section className="flex flex-col items-center md:flex-row sm:justify-between">
      <h1 className="sm:text-xl text-primary">© 2024 FoodZone - Fast Food Delivery Service</h1>
      <img src={payment} className="sm:w-[400px] lg:w-[500px]" alt="payment-options" />
    </section>
  </footer>
  )
}

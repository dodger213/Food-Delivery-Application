import payment from '/payment.png'

export default function SiteBottomFooter() {
  return (
    <footer className="py-2 text-center">
    <section className="flex flex-col items-center sm:justify-between md:flex-row">
      <h1 className="text-primary sm:text-xl">© 2024 FoodZone - Fast Food Delivery Service</h1>
      <img src={payment} className="sm:w-[400px] lg:w-[500px]" alt="payment-options" />
    </section>
  </footer>
  )
}

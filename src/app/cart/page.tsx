import dynamic from 'next/dynamic'

const CartList = dynamic(
  async () => await import('@/components/cart/cart-list'),
  { ssr: false }
)
const CartDetails = dynamic(
  async () => await import('@/components/cart/cart-details'),
  {
    ssr: false,
  }
)

export default function CartPage() {
  return (
    <div className="mx-auto max-w-screen-xl px-4 md:px-8">
      <div className="flex flex-col-reverse gap-8 md:grid md:grid-cols-3">
        <div className="md:col-span-2">
          <CartList />
        </div>
        <div className="md:col-span-1">
          <CartDetails />
        </div>
      </div>
    </div>
  )
}

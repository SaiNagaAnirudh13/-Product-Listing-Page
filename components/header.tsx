"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ShoppingCart, User, Search, Menu, X } from "lucide-react"
import { useAuth } from "@/components/auth-provider"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import LoginDialog from "./login-dialog"
import SignupDialog from "./signup-dialog"

export default function Header() {
  const [showMobileSearch, setShowMobileSearch] = useState(false)
  const { user, logout } = useAuth()
  const [showLoginDialog, setShowLoginDialog] = useState(false)
  const [showSignupDialog, setShowSignupDialog] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold">
            ShopNow
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-sm font-medium hover:text-primary">
              Home
            </Link>
            <Link href="/products" className="text-sm font-medium hover:text-primary">
              Products
            </Link>
            <Link href="/categories" className="text-sm font-medium hover:text-primary">
              Categories
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary">
              About
            </Link>
          </nav>

          {/* Desktop Search */}
          <div className="hidden md:flex items-center relative w-1/3">
            <Input type="search" placeholder="Search products..." className="w-full pr-8" />
            <Search className="absolute right-2 h-4 w-4 text-muted-foreground" />
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            {/* Mobile Search Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setShowMobileSearch(!showMobileSearch)}
            >
              <Search className="h-5 w-5" />
            </Button>

            {/* Cart */}
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>

            {/* User Menu */}
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <User className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Orders</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem onClick={logout}>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="hidden md:flex items-center space-x-2">
                <Button variant="ghost" onClick={() => setShowLoginDialog(true)}>
                  Login
                </Button>
                <Button onClick={() => setShowSignupDialog(true)}>Sign Up</Button>
              </div>
            )}

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col h-full">
                  <div className="flex-1 py-4">
                    <nav className="flex flex-col space-y-4">
                      <Link href="/" className="text-lg font-medium">
                        Home
                      </Link>
                      <Link href="/products" className="text-lg font-medium">
                        Products
                      </Link>
                      <Link href="/categories" className="text-lg font-medium">
                        Categories
                      </Link>
                      <Link href="/about" className="text-lg font-medium">
                        About
                      </Link>
                    </nav>
                  </div>
                  {!user && (
                    <div className="border-t pt-4">
                      <Button className="w-full mb-2" onClick={() => setShowLoginDialog(true)}>
                        Login
                      </Button>
                      <Button className="w-full" variant="outline" onClick={() => setShowSignupDialog(true)}>
                        Sign Up
                      </Button>
                    </div>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {showMobileSearch && (
          <div className="md:hidden mt-3 relative">
            <Input type="search" placeholder="Search products..." className="w-full pr-8" />
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-0 top-0"
              onClick={() => setShowMobileSearch(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>

      <LoginDialog
        open={showLoginDialog}
        onOpenChange={setShowLoginDialog}
        onSignupClick={() => {
          setShowLoginDialog(false)
          setShowSignupDialog(true)
        }}
      />

      <SignupDialog
        open={showSignupDialog}
        onOpenChange={setShowSignupDialog}
        onLoginClick={() => {
          setShowSignupDialog(false)
          setShowLoginDialog(true)
        }}
      />
    </header>
  )
}

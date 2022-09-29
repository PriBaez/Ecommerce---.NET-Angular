using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace netAngular.Models;

public partial class EcommerceContext : DbContext
{
    public EcommerceContext()
    {
    }

    public EcommerceContext(DbContextOptions<EcommerceContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Producto> Productos { get; set; } = null!;

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Producto>(entity =>
        {
            entity.HasKey(e => e.ProdId).HasName("PK__Producto__C55BDF13BCB15650");

            entity.Property(e => e.ProdId)
                .HasColumnOrder(0)
                .HasColumnType("numeric(7, 0)")
                .HasColumnName("Prod_Id");
            entity.Property(e => e.ProdDescription)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnOrder(1)
                .HasColumnName("Prod_Description");
            entity.Property(e => e.ProdPrice)
                .HasColumnOrder(2)
                .HasColumnType("money")
                .HasColumnName("Prod_Price");
            entity.Property(e => e.ProdSaleUnit)
                .HasMaxLength(10)
                .IsUnicode(false)
                .HasColumnOrder(4)
                .HasColumnName("Prod_SaleUnit");
            entity.Property(e => e.ProdStock)
                .HasColumnOrder(3)
                .HasColumnName("Prod_Stock");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}

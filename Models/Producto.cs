using System;
using System.Collections.Generic;

namespace netAngular.Models;

public partial class Producto
{
    public int ProdId { get; set; }

    public string ProdDescription { get; set; } = null!;

    public decimal ProdPrice { get; set; }

    public int ProdStock { get; set; }

    public string? ProdSaleUnit { get; set; }
}

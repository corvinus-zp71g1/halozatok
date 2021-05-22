using HajosTeszt.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace HajosTeszt.Controllers
{
    [Route("api/hallgatos")]
    [ApiController]
    public class HallgatoController : ControllerBase
    {

        HallgatoContext context = new HallgatoContext();

        [HttpGet("count")]
        public int ItemsCount()
        {
            return context.Hallgatos.Count();
        }

        [HttpGet("all")]
        public IEnumerable<Hallgato> Items()
        {
            return context.Hallgatos.ToList();
        }

        [HttpGet("{id}")]
        public Hallgato Get(int id)
        {
            var item = (from x in context.Hallgatos
                        where x.Id == id
                        select x).FirstOrDefault();
            return item;
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            var forDelete = (from x in context.Hallgatos
                             where x.Id == id
                             select x).FirstOrDefault();
            context.Remove(forDelete);
            context.SaveChanges();
        }

        [HttpPost]
        public void Post([FromBody] Hallgato item)
        {
            context.Hallgatos.Add(item);
            context.SaveChanges();
        }

    }
}

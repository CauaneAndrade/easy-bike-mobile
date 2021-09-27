from core.models.bicicleta import Bicicleta
from core.models.transacao import Aluguel
from core.models.transacao import Devolucao
from core.models.usuario import Usuario
from datetime import date, datetime


def get_or_create_usuario(categoria, user, documento, endereco):
    return Usuario.objects.get_or_create(categoria, user, documento, endereco)


def get_or_create_usuario_ciclista(user, documento, endereco):
    c = get_or_create_usuario(Usuario.Categoria.CICLISTA, user, documento, endereco)
    return c


def get_or_create_usuario_dono(user, documento, endereco):
    d = get_or_create_usuario(Usuario.Categoria.DONO, user, documento, endereco)
    return d


def get_data():
    return date.today().now()


def verifica_devolucao(aluguel_id):
    return Aluguel.objects.get(pk=aluguel_id).devolucao_set.exists()


def aluga_bicicleta(bicicleta: int, ciclista, devolucao):
    data_aluguel = get_data()
    if verifica_devolucao():
        Aluguel(bicicleta, ciclista, data_aluguel, devolucao)
    else:
        Aluguel(bicicleta, ciclista, data_aluguel)


def get_nivel_satisfacao(nivel_numero):
    dic = {
        1: Devolucao.NivelSatisfacao.BOM,
        2: Devolucao.NivelSatisfacao.OTIMO,
        3: Devolucao.NivelSatisfacao.RUIM
    }
    return dic['nivel_numero'] or dic[1]


def devolve_bicicleta(nivel_satisfacao, devolvido, local_entrega, comentario):
    data_devolucao = get_data()
    ns = get_nivel_satisfacao(nivel_satisfacao)
    return Devolucao(
        ns,
        devolvido,
        local_entrega,
        comentario,
        data_devolucao
    )


def cadastra_bicicleta(dono, estilo=None, marca, ano_fabricacao_string):
    ano_fabricacao = datetime.strftime(ano_fabricacao_string)

    if estilo:
        return Bicicleta(dono, estilo, marca, ano_fabricacao)
    else:
        return Bicicleta(dono, Bicicleta.Estilo.OUTRO, marca, ano_fabricacao)


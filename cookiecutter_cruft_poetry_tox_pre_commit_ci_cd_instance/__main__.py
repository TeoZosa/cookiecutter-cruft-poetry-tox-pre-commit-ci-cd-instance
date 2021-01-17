"""Command-line interface."""
from typing import Optional

import pkg_resources
import structlog_sentry_logger
import typer
from dotenv import find_dotenv, load_dotenv

__version__ = pkg_resources.get_distribution("cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance").version
app = typer.Typer()

# see `.env` for requisite environment variables
load_dotenv(find_dotenv())
LOGGER = structlog_sentry_logger.get_logger()


def version_callback(value: bool):
    if value:
        typer.echo(f"cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance Version: {__version__}")
        raise typer.Exit()


@app.command()
def main(
    version: Optional[bool] = typer.Option(
        None, "--version", callback=version_callback, is_eager=True
    ),
) -> None:
    """Cookiecutter Cruft Poetry Tox Pre Commit Ci Cd Instance."""
    LOGGER.info(
        "For `structlog_sentry_logger` usage documentation, see: "
        "`Structlog-Sentry-Logger`_"
        "_`Structlog-Sentry-Logger`: https://github.com/TeoZosa/structlog-sentry-logger"
    )


if __name__ == "__main__":
    app(prog_name="cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance")  # pragma: no cover

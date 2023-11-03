import { useState, useEffect } from "react";

const componeneList = {
  App: async () => await import("remoteApp2/App"),
};

type ComponentPath = "App";

function LoadComponent({ componentPath }: { componentPath: ComponentPath }) {
  const [MyComponent, setMyComponent] = useState<React.ComponentType | null>(
    null
  );

  const loadRemoteComponent = async () => {
    try {
      const remoteModule = await componeneList[componentPath]();

      if (remoteModule?.default) {
        setMyComponent(() => remoteModule.default);
      } else {
        console.error("O componente remoto não foi carregado corretamente");
      }
    } catch (error) {
      console.error("Erro ao carregar o componente remoto:", error);
    }
  };
  useEffect(() => {
    loadRemoteComponent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return MyComponent && <MyComponent />;
}

export default LoadComponent;

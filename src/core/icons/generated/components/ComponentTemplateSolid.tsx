import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ComponentTemplateSolid.svg';

export function ComponentTemplateSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="ComponentTemplateSolid">
      <SVG />
    </Icon>
  );
}

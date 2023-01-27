import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ComponentSolid.svg';

export function ComponentSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="ComponentSolid">
      <SVG />
    </Icon>
  );
}

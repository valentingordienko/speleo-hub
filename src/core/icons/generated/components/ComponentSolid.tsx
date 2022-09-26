import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ComponentSolid.svg';

export function ComponentSolid(props: TProps) {
  return (
    <Icon {...props} name="ComponentSolid">
      <SVG />
    </Icon>
  );
}
